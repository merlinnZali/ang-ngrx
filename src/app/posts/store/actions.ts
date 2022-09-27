import {createAction, props} from '@ngrx/store'
import { PostInterface } from '../types/post.interface'

export const getPosts = createAction('[Posts] Get posts')
export const getPostsSuccess = createAction(
    '[Posts] Get posts Success', 
    props<{posts: PostInterface[]}>()
)
export const getPostsFailure = createAction(
    '[Posts] Get posts Failure', 
    props<{error: string}>()
)

export const updatePost = createAction('[Posts] Update post', 
    props<{id:string, post: PostInterface}>()
)
export const addPost = createAction('[Posts] add post', 
    props<{post: PostInterface}>()
)
export const removePost = createAction('[Posts] remove post', 
    props<{id: string}>()
)