import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ImagesComponent} from './images/images.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MyInfoComponent} from './myinfo/myinfo.component';

import { MyFilterPipe } from './images/myfilter';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ImagesComponent,
    MyInfoComponent,
    MyFilterPipe   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
