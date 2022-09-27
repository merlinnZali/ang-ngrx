import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { select, Store } from '@ngrx/store';
import { isLoadingSelector, successSelector, errorSelector } from './selectors'
import { catchError, from, map, mergeMap, of, switchMap, withLatestFrom } from "rxjs";
import * as PostActions from './actions';
import { PostsService } from '../services/posts.service'
import { AppStateInterface } from "../types/AppState.interface";

@Injectable()
export class PostsEffects {

    constructor(private actions$: Actions, 
    private store: Store<AppStateInterface>,
    private PostsService: PostsService){}

    getPosts$ = createEffect( () => 
        this.actions$.pipe(
            ofType(PostActions.getPosts),
           /*  mergeMap(() => {
                return this.PostsService.getPosts().pipe(
                    map((posts) => PostActions.getPostsSuccess({posts})),
                    catchError((error) => 
                        of(PostActions.getPostsFailure({error: error.message}))
                    )
                )
            }) */
            switchMap(() => 
                from(this.PostsService.getPosts()).pipe(
                    map((posts) => PostActions.getPostsSuccess({posts})),
                    catchError((error) => 
                        of(PostActions.getPostsFailure({error: error.message}))
                    )
                )
            )
        )
    )

    // Run this code when the addTodo or removeTodo action is dispatched
  savePosts$ = createEffect(() =>
      this.actions$.pipe(
        ofType(PostActions.addPost, PostActions.removePost),
        withLatestFrom(this.store.select(successSelector)),
        switchMap(([action, posts]) => from(this.PostsService.savePosts(posts)))
      ),
    // Most effects dispatch another action, but this one is just a "fire and forget" effect
    { dispatch: false }
  );

}