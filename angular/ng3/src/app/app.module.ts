import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//k
import { YoutubePlayerModule } from 'ngx-youtube-player';
import {HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostComponent } from './post/post.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { TestComponent } from './test/test.component';
import { ImagesComponent } from './images/images.component';
import { PhoneLoginComponent } from './phone-login/phone-login.component';


//kunhu: dnd
import {DndModule} from 'ng2-dnd';
import { MycssComponent } from './mycss/mycss.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PostComponent,
    UsersComponent,
    DetailsComponent,
    TestComponent,
    ImagesComponent,
    PhoneLoginComponent,
    MycssComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    YoutubePlayerModule,
    DndModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
