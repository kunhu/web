import { Component, OnInit } from '@angular/core';



//
import { DomSanitizer } from '@angular/platform-browser';
import {DataService} from '../data.service';



@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  public url;
  public youtubelink="https://www.youtube.com/embed/LF6G6-4EDDg";
   public heroImageUrl="https://vignette.wikia.nocookie.net/halo/images/a/a0/Gir_suit.jpg/revision/latest?cb=20070202223219";
  
  constructor(private sanitizer:DomSanitizer,private data:DataService) {
    
    //this.url=this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/LF6G6-4EDDg');
    //return this.url;
    
  
  }
 
  //public items=['LF6G6-4EDDg','LF6G6-4EDDg','LF6G6-4EDDg'];
  public items=['ExJmET8boVw'];
  public myWidth=300;
  public myHeight=200;
  
  public userName="";
  public showAllLabels;
  public inputLabel="label";
  
  
  onClick(value,label){
      console.log("this is kunhutest (value,label):"+value+':'+label);
      //console.log(value);
      //this.items.push('LF6G6-4EDDg');
      //this.items.push(value);
      
      //this.items.unshift(value);
    
      //update database
      var json={
        itemId:value,
        label:label
      };
      this.data.postYoutubeItems(json);
    
  }
  // Show by lable
  onClickShow(label){
      console.log("this is kunhutest (label):"+label);
    //update this 
    this.inputLabel=label;
    var query;
    if(label=='all')
      query={};
    else
      query=label;
    
    this.data.postToGetYoutubeItems(query).subscribe(
    data => this.youtubeItems = data);

    
  }
  
  // Show all labels;
  onClickShowAllLables(){
    this.data.getShowAllLabels().subscribe(
    data => this.showAllLabels = data);

  }
  onDelete(itemId)
  {
    console.log('onDelete:'+itemId);
    this.data.postToDeleteYoutubeItems(itemId);
  }
   getUrl(item){
     //console.log("getUrl:"+item);
     return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+item);
   }
    
  
  
  //this.items$
  youtubeItems: Object;
  queryItems: Object;
  
  ngOnInit() {
    
    
    //post
    
    
    this.data.postToGetYoutubeItems('music').subscribe(
    data => this.youtubeItems = data);
    
    //init to show all labels
    //this.onClickShowAllLables();
    this.data.getShowAllLabels().subscribe(
      
      
    data => {this.showAllLabels = data;
    console.log("data:"+Object.values(this.showAllLabels));
    });
    /*
    this.data.getYoutubeItems().subscribe(
    data => this.youtubeItems = data);
    */
  }

 /*
  constructor(nav, app, menu, sanitizer) {

   
    this.app = app;
    this.nav = nav;
    this.menu = menu;
    this.sanitizer = sanitizer;

    this.theMediaItem.photoURL1 = this.sanitizer.bypassSecurityTrustUrl(this.mediaItems[1].url);
     
  }
 * * */
}
