import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//k
import {HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostComponent } from './post/post.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { TestComponent } from './test/test.component';

//


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PostComponent,
    UsersComponent,
    DetailsComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
