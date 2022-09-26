import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { PostsComponent } from './components/posts/posts.component';
import { PostsService } from './services/posts.service';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from './store/effects';



@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule, 
    // Here we load the posts reducer into the store
    StoreModule.forFeature('posts', reducers),
    EffectsModule.forFeature([PostsEffects])
  ],
  providers: [PostsService],
  exports: [
    PostsComponent
  ],
})
export class PostsModule { }
