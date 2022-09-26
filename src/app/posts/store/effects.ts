import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import * as PostActions from './actions';
import { PostsService } from '../services/posts.service'

@Injectable()
export class PostsEffects {

    constructor(private actions$: Actions, private PostsService: PostsService){}

    getPosts$ = createEffect( () => 
        this.actions$.pipe(
            ofType(PostActions.getPosts),
            mergeMap(() => {
                return this.PostsService.getPosts().pipe(
                    map((posts) => PostActions.getPostsSuccess({posts})),
                    catchError((error) => 
                        of(PostActions.getPostsFailure({error: error.message}))
                    )
                )
            })
        )
    )
}
/*
return this.PostsService.getPosts().pipe(
                    map((posts) => PostActions.getPostsSuccess({posts})),
                    catchError((error) => 
                        of(PostActions.getPostsFailure({error: error.message}))
                    )
                );
*/