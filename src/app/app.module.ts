import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostAddComponent } from './post-add/post-add.component';
import { PostViewComponent } from './post-view/post-view.component';

const myRouter: Routes=[
  {
    path:"",
    component: PostAddComponent
  },
  {
    path:"view",
    component: PostViewComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    PostAddComponent,
    PostViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
