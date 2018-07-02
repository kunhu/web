import { Component, OnInit } from '@angular/core';

//k
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

    posts$: Object;
  userId$: Object;
  
  constructor(private data:DataService, private route:ActivatedRoute) { 
  
  this.route.params.subscribe ( params => 
      {
        console.log('kunhu:params.id:' +params.id);
        this.userId$ = params.id;
      });
  
  
  }

  ngOnInit() {
     console.log('kunhu: details +++ userId='+this.userId$);
    
    this.data.getPosts().subscribe(
    data => this.posts$ = data)
  }

}
