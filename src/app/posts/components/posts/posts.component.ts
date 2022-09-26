import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as PostActions from '../../store/actions';
import { isLoadingSelector } from '../../store/selectors'
import { AppStateInterface } from '../../types/AppState.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public isLoading$: Observable<boolean>;

  constructor(private store: Store<AppStateInterface>) { 
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
  }

  ngOnInit(): void {
    this.store.dispatch(PostActions.getPosts())
  }

}
