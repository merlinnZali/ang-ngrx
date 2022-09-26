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