import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ImagesComponent } from './images/images.component';
import { MyInfoComponent } from './myinfo/myinfo.component';
import { SigninComponent } from './signin/signin.component';
import { DownloadComponent } from './download/download.component'

const routes: Routes = [
  
  {
    path: 'image',
    component: ImagesComponent
    
  },
 {
    path: 'info',
    component: MyInfoComponent
    
  },
 {
    path: 'signin',
    component: SigninComponent
    
  },
 {
    path: 'download',
    component: DownloadComponent
    
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
