import { Component, OnInit } from '@angular/core';



//filter
import { Pipe, PipeTransform } from '@angular/core';
import { KMessage } from './KMessage';
  
@Pipe({
    name: 'myfilter',
    pure: false
})
  
/*
export class MyFilterPipe implements PipeTransform {
    transform(items: any[], filter: Object): any {
      
      console.log("filter:"+filter);
      console.log("items:"+items);
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return items.filter(item => item.title.indexOf(filter.title) !== -1);
    }
}  
*/
  
 
export class MyFilterPipe implements PipeTransform {

   
  
  
  transform(value: any, args?: any): any {
    
    
      //due to Async.
      if(value==null) return;
    
      //console.log("value:"+JSON.stringify(value,null,4));
      //console.log("args:"+JSON.stringify(args,null,4));
      var msg= new KMessage(1);
      var myArray=[];
    
    
    //value.pipe(map(e => e.filter(x => {x.label === "music6"; msg.print(x);myArray.push(x.label)}) )) ;
    
      //console.log("myArray:"+myArray);
    
    // Remove the duplicate elements
    
      /*
     let uniqueArray = value.map(e => {label:e.label})
                            .filter(function (el, index, array) { 
       return array.indexOf(el) == index;
     });
     */
    
    //ok
    //let uniqueArray = value.map(e => {e.label;myArray.push(e.label)});
    let uniqueArray = value.map(e => {return e.label;});
    
    //let uniqueArray2 = Array.from(new Set(uniqueArray));
    
    //console.log("myArray filter:"+JSON.stringify(removeDuplicates(myArray),null,4));
    //console.log("uniqueArray filter:"+JSON.stringify(removeDuplicates(uniqueArray),null,4));
    return removeDuplicates(uniqueArray);
  }

}

 function removeDuplicates(arrayIn) {
    var arrayOut = [];
    for (var a=0; a < arrayIn.length; a++) {
        if (arrayOut[arrayOut.length-1] != arrayIn[a]) {
            arrayOut.push(arrayIn[a]);
        }
    }
    return arrayOut;
}

