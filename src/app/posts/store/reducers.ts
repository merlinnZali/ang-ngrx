import { createReducer, on, State} from '@ngrx/store'
import { PostsStateInterface } from '../types/postsState.interface'
import * as PostActions from './actions'

export const initialState: PostsStateInterface = {
    isLoading: false,
    posts: [],
    error: null
}


export const reducers = createReducer( 
    initialState,  
    on(PostActions.getPosts, (state) => ({...state, isLoading: true})),
    on(PostActions.getPostsSuccess, (state, action) => ({...state, isLoading: false, posts: action.posts})),
    on(PostActions.getPostsFailure, (state, action) => ({...state, isLoading: false, error: action.error})),
   
    on(PostActions.updatePost, (state, {id, post}) => 
       {
        let posts = state.posts.map((postItem, index) => {
          if(id === postItem.id){
            const clone = {...postItem}
            const deepCopy = {
              ...clone,
              title: post.title,
            }
            // use this with non nested object
            //return Object.assign({}, {...postItem, title: post.title})
            return deepCopy
          }
          return postItem
        })
        return {...state, posts}
      }
    ),

    on(PostActions.addPost, (state, {post}) => ({
        ...state, 
        posts: [...state.posts, { id: Date.now().toString(), title: post.title }],
      })
    ),

    on(PostActions.removePost, (state, {id}) => (
        {
         ...state, 
         posts: state.posts.filter((post) => post.id !== id),
       })
     ),
)
