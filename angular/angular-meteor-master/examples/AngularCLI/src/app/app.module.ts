import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ImagesComponent} from './images/images.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MyInfoComponent} from './myinfo/myinfo.component';

import { MyFilterPipe } from './images/myfilter';
import { DownloadComponent } from './download/download.component'

import {HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { NgProgressModule } from '@ngx-progressbar/core';


//singin
import {
    SocialLoginModule,
    AuthServiceConfig,
    GoogleLoginProvider,
    FacebookLoginProvider,
} from "angular-6-social-login";
import { SigninComponent } from './signin/signin.component';

// Configs 
 //kunhu disable 
        /*   
          {
            id: LinkedinLoginProvider.PROVIDER_ID,
            provider: new LinkedinLoginProvider("1098828800522-m2ig6bieilc3tpqvmlcpdvrpvn86q4ks.apps.googleusercontent.com")
          },
         */

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("Your-Facebook-app-id")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("Your-Google-Client-Id")
        }     
      ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ImagesComponent,
    MyInfoComponent,
    MyFilterPipe,
    SigninComponent,
    DownloadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    SocialLoginModule
    NgProgressModule.forRoot(),
    
    
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
