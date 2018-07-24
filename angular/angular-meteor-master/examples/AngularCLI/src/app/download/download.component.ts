import { Component, OnInit } from '@angular/core';



//
import { DomSanitizer } from '@angular/platform-browser';


//kunhu : add
//import { Observable2 } from 'rxjs/Rx';
//import { filter, map } from 'rxjs/operators';
//import { range }  from 'rxjs/add/observable/range';
//import { Rx } from "rxjs/Rx";



import { YoutubeItems } from 'api/server/collections';
import { YoutubeItem } from 'api/server/models';

import { DataService } from '../data.service';
import { Observable, Subject, ReplaySubject, from, of, range, interval,timer } from 'rxjs';


//debug
//import { main_function } from './debug'

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss'],
  providers: [DataService]
})




export class DownloadComponent implements OnInit {

  public url;
  public youtubelink="https://www.youtube.com/embed/LF6G6-4EDDg";
   public heroImageUrl="https://vignette.wikia.nocookie.net/halo/images/a/a0/Gir_suit.jpg/revision/latest?cb=20070202223219";
  
  

  public labelArray =[];
  public labelArray2 =[];
  public items=['ExJmET8boVw'];
  public myWidth=300;
  public myHeight=200;
  
  public userName="";
 
  public inputLabel="label";
  
  public  urlToDownload;
  
  videoFile: Object;
  public myprogress="50 %";

  constructor(private sanitizer:DomSanitizer,private data:DataService) {
      
  }

    
  removeDuplicates(arrayIn) {
    var arrayOut = [];
    for (var a=0; a < arrayIn.length; a++) {
        if (arrayOut[arrayOut.length-1] != arrayIn[a]) {
            arrayOut.push(arrayIn[a]);
        }
    }
    return arrayOut;
  }

  onClick(value,label){

      //update database
    this.debug_15_interval();
    
    console.log("showAllLabels:(value,label)=%s,%s",value,label);
      var json={
        url:value,
        label:label
      };
    
    /*
     this.data.getUsers().subscribe(
    data => this.users$ = data)
    */
    
    this.data.postToDownloadVideoAndConvert(json)
    .subscribe(msg=>{this.urlToDownload = msg; console.log(msg);this.downloadFile(msg.urlToDownload);}, err=>{ console.log(err); throw "";});
    
    //this.okToDownload=myjson;
    
     //console.log("okToDownload:"+this.okToDownload);
    console.log( "kunhu"+JSON.stringify(myjson,null,4));
    
        //var res=this.data.getYoutubeItems();
        //console.log( JSON.stringify(res,null,4));
    
      //var res=this.data.getUsers();
      //console.log( JSON.stringify(res,null,4));
  }
  // Show by lable
  onClickShow(mylabel){
      console.log("this is kunhutest (label):"+mylabel);
      
  }
  
  downloadFile(data: Response){
    console.log("downloadFile+++data:"+data);
  var blob = new Blob([data], { type: 'text/csv' });
  var url= window.URL.createObjectURL(blob);
  window.open(url);
  }
  
  onClickDownload(){
    console.log("onClickDownload+++");
    this.data.httpGet(this.urlToDownload.urlToDownload).subscribe(
    data => this.downloadFile(data))
  }
  //db.inventory.find( { status: "A" }, { item: 1, status: 1, _id: 0 } )
  // Show all labels;
  onClickShowAllLables(){
   
  }
  onDelete(itemId)
  {
    
    console.log('onDelete:'+itemId);
  
    //this.data.postToDeleteYoutubeItems(itemId);
  }
   getUrl(item){
     //console.log("getUrl:"+item);
     return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+item);
   }
    
  
  
   debug_15_interval()
  {
    console.log('debug_15_interval+++');
    var source2 = interval(1000);
  
      source2.subscribe({
        next: function(value) {
          console.log('interval:'+value)
          this.progress=value*10;
          this.progress=50;
        },
        complete: function() {
          console.log('complete!');
        },
        error: function(error) {
          console.log('Throw Error: ' + error)
        }
      }); 
  }
  
  ngOnInit() {
  
  }

}
