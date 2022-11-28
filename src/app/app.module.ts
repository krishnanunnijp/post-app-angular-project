import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostAddComponent } from './post-add/post-add.component';
import { PostViewComponent } from './post-view/post-view.component';
import { PostNavbarComponent } from './post-navbar/post-navbar.component';
import { FormsModule } from '@angular/forms';

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
    PostViewComponent,
    PostNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRouter),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
