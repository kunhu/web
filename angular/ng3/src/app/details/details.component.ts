import { Component, OnInit } from '@angular/core';


//k
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  
  user$: Object;
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
    
    this.data.getUser(this.userId$).subscribe(
    data => this.user$ = data)
    
    
  }

}
