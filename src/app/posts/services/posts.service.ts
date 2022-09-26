import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { PostInterface } from '../types/post.interface';

@Injectable()
export class PostsService {

  constructor() { }

  getPosts(): Observable<PostInterface[]> {
    const posts: PostInterface[] = [
      {id: '1', title: 'post 1'},
      {id: '2', title: 'post 2'},
      {id: '3', title: 'post 3'}
    ]
    return of(posts).pipe(delay(2000)) 
  }
}
