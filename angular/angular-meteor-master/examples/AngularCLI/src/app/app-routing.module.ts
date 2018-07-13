import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ImagesComponent } from './images/images.component';


const routes: Routes = [
  
  {
    path: 'image',
    component: ImagesComponent
    
  },
 
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
