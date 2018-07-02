import { Component, OnInit } from '@angular/core';

//k
import {DataService} from '../data.service';
import {Observable } from 'rxjs';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$: Object;

  constructor(private data:DataService) { }

  ngOnInit() {
    console.log('kunhu debug 1 ' + this.data.getUsers());
    
    for(var i=0;i<2;i++)
    {
       console.log('kunhu debug 2 : '+this.data.getUsers());
    
    }
    this.data.getUsers().subscribe(
    data => this.users$ = data)
  }

}
