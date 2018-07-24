import { Component, OnInit } from '@angular/core';

export class KMessage
{
  index=0;
  tag="";
  constructor(start)
  {
    this.index=start;
    this.tag="tag";
  }
  
  print (value)
  {
    
    console.log('%s:%d,%s',this.tag,this.index,JSON.stringify(value,null,4));
    this.index=this.index+1;
  }
  setTag(tag){
    this.tag=tag;
  }
}