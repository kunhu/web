import { Component, OnInit } from '@angular/core';



//
import { DomSanitizer } from '@angular/platform-browser';
//import {DataService} from '../data.service';
import { MeteorObservable } from 'meteor-rxjs';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

//kunhu : add
//import { Observable2 } from 'rxjs/Rx';
import { filter, map } from 'rxjs/operators';
//import { range }  from 'rxjs/add/observable/range';
//import { Rx } from "rxjs/Rx";



import { YoutubeItems } from 'api/server/collections';
import { YoutubeItem } from 'api/server/models';

//debug
import { main_function } from './debug'

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
  
  

// Kunhu add pipe
 /*  
@Pipe({
  name: 'filterUnique',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
    // Remove the duplicate elements
    // let uniqueArray = value.filter(function (el, index, array) { 
    //   return array.indexOf(el) == index;
    // });
    
    let uniqueArray = Array.from(new Set(value));
    
    return uniqueArray;
  }

}
*/
//----------------




export class ImagesComponent implements OnInit {

  public url;
  public youtubelink="https://www.youtube.com/embed/LF6G6-4EDDg";
   public heroImageUrl="https://vignette.wikia.nocookie.net/halo/images/a/a0/Gir_suit.jpg/revision/latest?cb=20070202223219";
  
  
  youtubeItems: Observable<YoutubeItem[]>;

  showAllLabels:Observable<YoutubeItem[]>;
  public labelArray =[];
  public labelArray2 =[];
  public items=['ExJmET8boVw'];
  public myWidth=300;
  public myHeight=200;
  
  public userName="";
 
  public inputLabel="label";
  
  
  
  
  constructor(private sanitizer:DomSanitizer) {
    
    /*
    console.log("debug+++");
    var source = Rx.Observable.fromArray([1,2,3,4])
    .elementAt(1);
    
    console.log("source:"+source);
    */
    
       //this.url=this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/LF6G6-4EDDg');
    //return this.url;
     this.youtubeItems = MeteorObservable.subscribe('youtubeItems')
      .pipe(switchMap(() => YoutubeItems.find()));
    
    console.log("items:%o",this.youtubeItems);
    
    
    
    
     this.showAllLabels = MeteorObservable.subscribe('youtubeItems')
      .pipe(switchMap(() => YoutubeItems.find()));
    
    
   
    //this.showAllLabels.pipe(map(value=> console.log("e:"+value); return value.label;));
    
    
    /*
      this.showAllLabels.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); },
    finally:  () => { console.log('finally'); }
    });
    */
    //console.log('newest:'); 
    // var newest = this.showAllLabels.pipe(map(x => {console.log("kunhu:");console.log("kunhu:"+x)} )); 
    //var newest = this.showAllLabels.pipe(map(x => return {name:"kunhu"+x} )); 
 
    //newest.subscribe(x=> {console.log(JSON.stringify(x,null,4))} ));
    
    //console.log('newest:'+JSON.stringify(newest,null,4)); 
   
    
    
    
    this.showAllLabels.subscribe(value=>
      {
       
        console.log("kunhu:legth:"+value.length);
      
        var json={
          name:"123",
          id:"myid"
        }
        //console.log("debug json:",JSON.stringify(json,null,4));
        //console.log("debug json2:",JSON.stringify(value,null,4));
        //console.log("debug id:",value[0].id);
        
         for(var i=0;i<value.length;i++)
           {
           this.labelArray.push(value[i].label);
           console.log("label:"+value[i].label);
         }
          
        this.labelArray2=[];
        this.labelArray2=this.removeDuplicates(this.labelArray);
        this.labelArray2=this.removeDuplicates(this.labelArray2);
        //console.log("this.labelArray2 : "+this.labelArray2);
      });
    
    // fixed me later: map is not working. why?
    //var new1=this.showAllLabels.pipe(map(x=> return {label:x.label}));
    /*
    console.log("new0:");
    var new1=this.showAllLabels.pipe(map(x=> {console.log(x.label);return {label:x.label} } ));
    console.log("new1:");
    new1.subscribe(x => {console.log(x);labelArray.push(x.label));
    console.log("labelArray:"+JSON.stringify((labelArray),null,4));
    */
    //console.log("labelArray filter:"+JSON.stringify(this.removeDuplicates(this.labelArray),null,4) );
    this.labelArray2=this.removeDuplicates(this.labelArray);
     //console.log("labelArray2:"+this.labelArray2);
    //console.log("this.showAllLabels:",JSON.stringify(this.showAllLabels,null,4));
    
    //this.debug();
    //this.showAllLabels.
    /*
    consolo.log("debug+++");
    this.showAllLabels.subscribe(
    function(x){
      consolo.log("x:"+x);
    });
     * /
    //consolo.log(" showAllLabels :"+this.showAllLabels.elementAt(0));
    
    /*
    for(var i=0;i<this.showAllLabels.length;i++){
      consolo.log(" item:%i,%s",i,this.showAllLabels[0].label);
    }*/
    //this.showAllLabels=this.youtubeItems;
    console.log("showAllLabels:%o",this.showAllLabels);
  
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

    main_function();
    //return;
    
    
      console.log("this is kunhutest (value,label):"+value+':'+label);
      MeteorObservable.call('addYoutubeItems', value,label).subscribe(
      res => console.log(res),
      err => console.error(err)
      );
      //update database
      var json={
        itemId:value,
        label:label
      };
      //this.data.postYoutubeItems(json);
    
  }
  // Show by lable
  onClickShow(mylabel){
      console.log("this is kunhutest (label):"+mylabel);
     this.youtubeItems = MeteorObservable.subscribe('youtubeItems')
      .pipe(switchMap(() => YoutubeItems.find({label:mylabel})));
    
  }
  
  //db.inventory.find( { status: "A" }, { item: 1, status: 1, _id: 0 } )
  // Show all labels;
  onClickShowAllLables(){
    
     this.youtubeItems = MeteorObservable.subscribe('youtubeItems')
     // .pipe(switchMap(() => YoutubeItems.find({},{id:1,label:1})));
    .pipe(switchMap(() => YoutubeItems.find({})));
    
    console.log("items:%o",this.youtubeItems);
    
    /*
    this.data.getShowAllLabels().subscribe(
    data => this.showAllLabels = data);
    */
  }
  onDelete(itemId)
  {
    
    console.log('onDelete:'+itemId);
    
    /*
    this.youtubeItems = MeteorObservable.subscribe('removeYoutubeItems')
      .pipe(switchMap(() => YoutubeItems.remove({id:itemId})));
    */
    
     var json={id:itemId};
     MeteorObservable.call('removeYoutubeItems', itemId).subscribe(
      res => console.log(res),
      err => console.error(err)
      );
   
    
    //Meteor.call('removeUsingOtherField',{id:itemId});
    //this.data.postToDeleteYoutubeItems(itemId);
  }
   getUrl(item){
     //console.log("getUrl:"+item);
     return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+item);
   }
    
  
  

  
  ngOnInit() {
    
    
    //post
    
    /*
    this.data.postToGetYoutubeItems('music').subscribe(
    data => this.youtubeItems = data);
    
    //init to show all labels
    //this.onClickShowAllLables();
    this.data.getShowAllLabels().subscribe(
      
      
    data => {this.showAllLabels = data;
    console.log("data:"+Object.values(this.showAllLabels));
    });
     * */
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
