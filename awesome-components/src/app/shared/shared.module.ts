import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './components/comments/comments.component';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ShortenPipe } from './pipes/shorten.pipe';
import { UsernamePipe } from './pipes/username.pipe';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    CommentsComponent, 
    ShortenPipe, 
    UsernamePipe,
    HighlightDirective,
  ],
  imports: [
    CommonModule, 
    MaterialModule, 
    ReactiveFormsModule
  ],
  exports: [
    MaterialModule,
    CommentsComponent, 
    ReactiveFormsModule, 
    ShortenPipe, 
    UsernamePipe, 
    HighlightDirective, 
  ]
})
export class SharedModule { }
