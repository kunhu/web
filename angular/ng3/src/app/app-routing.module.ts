import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//kunhu
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { PostComponent } from './post/post.component';
import { TestComponent } from './test/test.component';
import { ImagesComponent } from './images/images.component';
import { PhoneLoginComponent } from './phone-login/phone-login.component';
import { MycssComponent } from './mycss/mycss.component';


const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'posts',
    component: PostComponent
  },
  {
    path: 'kunhu/:id',
    component: DetailsComponent
  },
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'image',
    component: ImagesComponent
    
  },
  {
    path: 'phone',
    component: PhoneLoginComponent
    
  },
  {
    path: 'mycss',
    component: MycssComponent
    
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
