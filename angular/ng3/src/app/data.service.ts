import { Injectable } from '@angular/core';

//kun
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  getUsers(){
    var url='https://jsonplaceholder.typicode.com/users/';
    console.log('kunhu getUsers:url=' + url);
    
    return this.http.get(url);
  }
  
  getUser(userId){
    
     console.log('kunhu in data,userId=' + userId);
    // var url='https://jsonplaceholder.typicode.com/users/6'+userId;
    var url='https://jsonplaceholder.typicode.com/users/'+userId;
    console.log('kunhu in data,url=' + url);
    return this.http.get(url);
  }
  
  getPosts()
  {
    return this.http.get('https://jsonplaceholder.typicode.com/users/posts');
  }
}
