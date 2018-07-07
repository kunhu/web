import { Component, OnInit, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventEmitter } from 'events';

import { YoutubePlayerModule } from 'ngx-youtube-player';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})



export class TestComponent implements OnInit {

  constructor() { }

  public name='this is kunhu test';
  public name2='this is kunhu test';
  public username = 'Albert';
  public myId="myid123";
  public isDisabled=false;
  public successClass="text-success";
 
  public hasError=true;
  public messageClass={
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": true
  }
  
  public greeting="";
  
 public titleStyles = {
   color: "blue",
   fointStyle: "italic",
 }
  public siteUrl = window.location.href;
  
  
  public userName="";
  
  public displayName = false;
  
  public color="red";
  
  public colors=["red","green","blue","yellow"];
  
  
  public youtubelinks=["https://www.youtube.com/embed/LF6G6-4EDDg"
  ,"https://www.youtube.com/embed/LF6G6-4EDDg",
    "https://www.youtube.com/embed/LF6G6-4EDDg"]
  
  
  @Input() public parentData;
  @Output() public childEvent = new EventEmitter();
  
  
  public heroImageUrl="https://vignette.wikia.nocookie.net/halo/images/a/a0/Gir_suit.jpg/revision/latest?cb=20070202223219";
  
  ngOnInit() {
  }
  greetUser()
  {
    return 'hello ' + this.username;
    
  }
  onClick()
  {
     console.log("onClick!!!");
      this.greeting="welcome to my home";
    
  }
  onClick2(event)
  {
    console.log(event);
  }
  logId(value){
     console.log("this is kunhutest");
    console.log(value);
  }
  changeColor(color)
  {
    console.log("changeColor:"+color);
    this.color=color;
  }
  fireEvent(){
    console.log("fireEvent:"+123);
    this.childEvent.emit("hey home");
  }
  
  // Kunhu +++++++++++++++ youtube test start +++++++++
  id = 'qDuKsiwS5xw';
  private player;
  private ytEvent;
  public ids=['LF6G6-4EDDg',
  ,'LF6G6-4EDDg',
    'LF6G6-4EDDg']
  

  onStateChange(event) {
    this.ytEvent = event.data;
  }
  savePlayer(player) {
    this.player = player;
  }
  
  playVideo() {
    this.player.playVideo();
  }
  
  pauseVideo() {
    this.player.pauseVideo();
  }

  //
   transferData: Object = {id: 1, msg: 'Hello'};
    receivedData: Array<any> = [];

    transferDataSuccess($event: any) {
      console.log("kunhu:event" + $event);
        this.receivedData.push($event);
    }
}
