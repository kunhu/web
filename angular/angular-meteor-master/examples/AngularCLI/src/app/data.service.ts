import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

//kunhu
import { HttpClient } from '@angular/common/http';
import { RequestOptions } from '@angular/http';





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
  
  httpGet(url){
    console.log("httpGet+++ url:"+url);
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
  
  //private url='http://192.168.0.63:4000';
  private url='http://localhost:4000';
  private urlToDownload='http://localhost:4000/cc'
  private urlShowAllLabels='http://localhost:4000/showAllLabels';

  getYoutubeItems()
  {
      //AngularJS: No “Access-Control-Allow-Origin” header is present on the requested resource [duplicate]
     console.log('getYoutubeItems+++');
     //var url='http://localhost:4000';
   
    //console.log('getYoutubeItems---'+this.http.get(this.url););
     return this.http.get(this.url);
  }
  getShowAllLabels()
  {
   
    console.log('getShowAllLabels+++url:'+this.urlShowAllLabels);
    return this.http.get(this.urlShowAllLabels);
  }
  
 
  
  
  
  
  
  
  postResult:Object;
  
  postYoutubeItems(myJson)
  {
    
    //'Authorization': 'my-auth-token'
    /*
     var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        
          })
          };
    */
    //let head = new Headers({ 'Content-Type': 'application/json' });
    //headers2.append('Accept', 'application/json');
    //let options = new RequestOptions({ Headers: head });
    
     //let head = new Headers({ 'Content-Type': 'application/json' });
     //   let options = new RequestOptions({ headers: head });
    
    
    /*
    let httpHeaders = new HttpHeaders({
             'Content-Type' : 'application/json'
        });
    */
    let httpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json');   
        let options = {
            headers: httpHeaders
        };   
    //console.log('postYoutubeItems+++ items:'+myJson.itemId);
    //console.log('postYoutubeItems+++ myLabel:'+myJson.labelmus);
    console.log('postYoutubeItems+++ 111?:'+JSON.stringify(myJson));
    
    var json = {name: myJson.itemId,
                address: 'myApp',
                itemsId: myJson.itemId,
                label: myJson.label};
    console.log('data:' + json);
    

    console.log('postYoutubeItems+++ 111?:'+JSON.stringify(myJson));
    /*
    this.http.post(this.url, JSON.stringify(json),
            {
              headers: httpHeaders,
              observe: 'response'
            });
    */
    //okay!!!
    this.http.post(this.url,  JSON.stringify(json), { headers: httpHeaders }).subscribe(msg=>{this.postResult = msg; console.log(msg);}, err=>{ console.log(err); throw "";});
    
    console.log('postYoutubeItems+++ 222?:'+this.url);
    console.log('postYoutubeItems+++ 333?:'+JSON.stringify(options));
    
    //return this.http.post(this.url,json, this.httpOptions);
    
    
    /*
    var body=json;
    
    return this.http.post(this.url,
    body.toString(),
    {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    }
     
  );
    */
    
    
    //return this.http.post(url,json);
    
  }
  
  postToDeleteYoutubeItems(ItemId)
  {
    let urlToDelete='http://localhost:4000/delete'
    let httpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json');   
        let options = {
            headers: httpHeaders
        };   
    console.log('postToDeleteYoutubeItems+++ ItemId:'+ItemId);
    var json = {name: ItemId,
                address: 'myApp',
                itemsId: ItemId};
    console.log('data:' + json);
    
    
    
    console.log('postYoutubeItems+++ 111?:'+JSON.stringify(json));
    /*
    this.http.post(this.url, JSON.stringify(json),
            {
              headers: httpHeaders,
              observe: 'response'
            });
    */
    //okay!!!
    this.http.post(urlToDelete,  JSON.stringify(json), { headers: httpHeaders }).subscribe(msg=>{this.postResult = msg; console.log(msg);}, err=>{ console.log(err); throw "";});
    
    console.log('postYoutubeItems+++ 222?:'+urlToDelete);
    console.log('postYoutubeItems+++ 333?:'+JSON.stringify(options));
  }
  
  
   //
   postToDownloadVideoAndConvert(myjson)
  
  {
    
    let httpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json');   
        let options = {
            headers: httpHeaders
        };   
    console.log('postToDownloadVideoAndConvert+++ video url:'+myjson.url);
    var json = {url:myjson.url};
    console.log('data:' + json);

    console.log('postToDownloadVideoAndConvert+++ 111?:'+JSON.stringify(json));
    console.log('data:' + this.urlToDownload);
     
    //okay!!!
    return this.http.post(this.urlToDownload,  JSON.stringify(json), { headers: httpHeaders })
      //.subscribe(msg=>{this.postResult = msg; console.log(msg);}, err=>{ console.log(err); throw "";});
    
    //return this.postResult;
    //fail!!
     //return this.http.post(urlToDownload,  JSON.stringify(json), { headers: httpHeaders })

  }
  
  
  
}
