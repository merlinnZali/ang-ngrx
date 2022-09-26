import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as PostActions from '../../store/actions';
import { isLoadingSelector, successSelector, errorSelector } from '../../store/selectors'
import { AppStateInterface } from '../../types/AppState.interface';
import { PostInterface } from '../../types/post.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public isLoading$: Observable<boolean>;
  public error$: Observable<string|null>;
  public posts$: Observable<PostInterface[]>;

  constructor(private store: Store<AppStateInterface>) { 
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.posts$ = this.store.pipe(select(successSelector))
    this.error$ = this.store.pipe(select(errorSelector))
  }

  ngOnInit(): void {
    this.store.dispatch(PostActions.getPosts())
  }

}
