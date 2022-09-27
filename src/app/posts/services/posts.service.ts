import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { PostInterface } from '../types/post.interface';
// import { Storage } from '@ionic/storage-angular';
@Injectable()
export class PostsService {
  posts: PostInterface[] = []

  //private storageInitialised = false;


  constructor() { 
    this.posts = [
      {id: '1', title: 'post 1'},
      {id: '2', title: 'post 2'},
      {id: '3', title: 'post 3'}
    ]
  }

  getPosts(): Observable<PostInterface[]> {
    return of(this.posts).pipe(delay(2000)) 
  }

  savePosts(post: PostInterface[]){
    this.posts = [...this.posts, ...post]
    return of()
  }
  /*
  async getPosts(): Promise<PostInterface[]> {
    if (!this.storageInitialised) await this.storage.create();

    return (await this.storage.get('posts')) || [];
  }

  async savePosts(posts: PostInterface[]) {
    if (!this.storageInitialised) await this.storage.create();

    return this.storage.set('posts', posts);
  }
  */
}
