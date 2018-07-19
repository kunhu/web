import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ImagesComponent } from './images/images.component';
import { MyInfoComponent } from './myinfo/myinfo.component';

const routes: Routes = [
  
  {
    path: 'image',
    component: ImagesComponent
    
  },
 {
    path: 'info',
    component: MyInfoComponent
    
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
