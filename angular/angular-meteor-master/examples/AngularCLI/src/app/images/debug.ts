/*
* http://usejsdoc.org/
*/
import { MeteorObservable } from 'meteor-rxjs';
import { switchMap } from 'rxjs/operators';


//kunhu : add
//import { Observable2 } from 'rxjs/Rx';
import { filter, map, take,flatMap,concatMap } from 'rxjs/operators';
//import { Rx } from "rxjs/Rx";
//import "rxjs/add/observable/interval";


//
import { Observable, Subject, ReplaySubject, from, of, range, interval,timer } from 'rxjs';
//import { Observable } from 'rxjs';

//Kunhu add
import { KMessage } from './KMessage';

  function debug()
  {
    console.log("debug+++???");
    const filterOutEvens = filter(x => x % 2);
    //const sum = reduce((acc, next) => acc + next, 0);
    const doubleBy = x => map(value => value * x);
    
    const source$ = Observable.
    //const source$ = Observable.
    
    source$.let(filterOutEvens).subscribe(x => 
      {
      
      console.log(x);
       console.log("debug+++222.???");
    }); // [1, 3, 5, 7, 9]
        
  }
  function debug_2()
  {
    console.log("debug_2+++ start");
    var observable = Observable
    .create(function(observer) {
        observer.next('Jerry'); // RxJS 4.x 以前的版本用 onNext
        observer.next('Anna');
      });
  
      // 訂閱這個 observable  
    observable.subscribe(function(value) {
      console.log(value);
    });
    
    console.log('end');
  }
  
  function debug_3_next_complete()
  {
    console.log('debug_3_next_complete:start');
        var observable = Observable
      .create(function(observer) {
          observer.next('Jerry');
          observer.next('Anna');
          observer.complete();
          observer.next('not work');
      });
      
    // 宣告一個觀察者，具備 next, error, complete 三個方法
    var observer = {
      next: function(value) {
        console.log(value);
      },
      error: function(error) {
        console.log(error)
      },
      complete: function() {
        console.log('complete')
      }
     
   };
     console.log('end');
    // 用我們定義好的觀察者，來訂閱這個 observable  
    observable.subscribe(observer);
  }
  function debug_4_rnage()
  {
    console.log('debug_4_rnage');
     var observable = Rx.Observable;
  }
  
  function debug_5_event()
  {
    console.log('debug_5_event+++');
     Observable
    .fromEvent(document.body, 'click') // 註冊監聽
    .take(1) // 只取一次
    .subscribe(console.log("event !!!"));
    console.log('debug_5_event---');
    
  }
  function debug_6_function()
  {
    console.log('debug_6_function+++');
    var result=[9, 4].concat([8, 7]) // 合併陣列
      .sort()  // 排序
      .filter(x => x > 5) // 過濾出大於 5 的
    
    console.log('result:'+result);   //result:7,8,9
    console.log('debug_6_function---');
  }
  function debug_7_javascript_array()
  {
    console.log('debug_7_javascript_array+++');
        var newCourseList = [
      {
        "id": 511021,
        "title": "React for Beginners",
        "coverPng": "https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png",
        "rating": 5
      },
      {
        "id": 511022,
        "title": "Vue2 for Beginners",
        "coverPng": "https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png",
        "rating": 5
      },
      {
        "id": 511023,
        "title": "Angular2 for Beginners",
        "coverPng": "https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png",
        "rating": 5
      },
      {
        "id": 511024,
        "title": "Webpack for Beginners",
        "coverPng": "https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png",
        "rating": 4
      }
    ], idAndTitle = [];
    
    newCourseList.forEach((course) => {
      idAndTitle.push({ id: course.id, title: course.title });
      });
    
    
    console.log('result,idAndTitle:'+JSON.stringify(idAndTitle,null,4));   //result:7,8,9
    
    var idAndTitle2 = newCourseList
                 .map((course) => {
                     return { id: course.id, title: course.title };
                 });
     console.log('result,idAndTitle2:'+JSON.stringify(idAndTitle2,null,4));   //result:7,8,9
    
    
    var ratingIsFive = newCourseList
                   .filter((course) => course.rating === 5);
    console.log('result,ratingIsFive:'+JSON.stringify(ratingIsFive,null,4));   //result:7,8,9
    
    console.log('debug_7_javascript_array---');
    
  }
  function debug_8_level2_array()
  {
    console.log('debug_8_level2_array+++');
            var user = {
          id: 888,
          name: 'JerryHong',
          courseLists: [{
            "name": "My Courses",
            "courses": [{
              "id": 511019,
              "title": "React for Beginners",
              "coverPng": "https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png",
              "tags": [{ id: 1, name: "JavaScript" }],
              "rating": 5
            }, {
              "id": 511020,
              "title": "Front-End automat workflow",
              "coverPng": "https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png",
              "tags": [{ "id": 2, "name": "gulp" }, { "id": 3, "name": "webpack" }],
              "rating": 4
            }]
          }, {
            "name": "New Release",
            "courses": [{
              "id": 511022,
              "title": "Vue2 for Beginners",
              "coverPng": "https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png",
              "tags": [{ id: 1, name: "JavaScript" }],
              "rating": 5
            }, {
              "id": 511023,
              "title": "Angular2 for Beginners",
              "coverPng": "https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png",
              "tags": [{ id: 1, name: "JavaScript" }],
              "rating": 4
            }]
          }]
        };
        
        var allCourseIds = [];
        
        user.courseLists.forEach(list => {
          list.courses
            .filter(item => item.rating === 5)
            .forEach(item => {
              allCourseIds.push(item)
            })
        });
    
    console.log('result:'+JSON.stringify(allCourseIds,null,4));
    console.log('debug_8_level2_array---');
  }

class Producer {
  constructor() {
    this.listeners = [];
  }
  addListener(listener) {
    if(typeof listener === 'function') {
      this.listeners.push(listener)
    } else {
      throw new Error('listener 必須是 function')
    }
  }
  removeListener(listener) {
    this.listeners.splice(this.listeners.indexOf(listener), 1)
  }
  notify(message) {
    this.listeners.forEach(listener => {
      listener(message);
    })
  }
}

var debug_9_addListener= function(){
  
    console.log('debug_9_addListener+++');
  
    var egghead = new Producer(); 
    // new 出一個 Producer 實例叫 egghead
    
    function listener1(message) {
      console.log(message + 'from listener1');
    }
    
    function listener2(message) {
      console.log(message + 'from listener2');
    }
    
    egghead.addListener(listener1); // 註冊監聽
    egghead.addListener(listener2);
    
    egghead.notify('A new course!!') // 當某件事情方法時，執行
  
    console.log('debug_9_addListener---');
  
  }

function* getNumbers(words) {
    for (let word of words) {
      if (/^[0-9]+$/.test(word)) {
          yield parseInt(word, 10);
      }
    }
  }

function debug_10_LazyEvaluation()
{
  console.log('debug_10_LazyEvaluation+++');
  const iterator = getNumbers('30 天精通 RxJS (04)');
  
  var result;
  result=iterator.next();
  console.log(result);
  // { value: 3, done: false }
  result=iterator.next();
  console.log(result);
  // { value: 0, done: false }
  result=iterator.next();
  console.log(result);
  // { value: 0, done: false }
  result=iterator.next();
  console.log(result);
  // { value: 4, done: false }
  iterator.next();
  // { value: undefined, done: true }
}

/*
So instead of

import { Observable, of } from "rxjs";
Observable.of(this.purposes);
do

import { of } from "rxjs";
of(this.purposes);
*/
  
 
function debug_11_of()
{
  console.log('debug_11_of+++');
  var source = of('Jerry', 'Anna');
  var arr = ['Jerry', 'Anna', 2016, 2017, '30 days'] 
  var source = from(arr);

  source.subscribe({
      next: function(value) {
          console.log(value)
      },
      complete: function() {
          console.log('complete!');
      },
      error: function(error) {
          console.log(error)
      }
  });

}


function debug_12_promise()
{
  console.log('debug_12_promise+++');
  var source = from(new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello RxJS!');
    },2000)
  }))
  
  source.subscribe({
      next: function(value) {
        console.log(value)
      },
      complete: function() {
        console.log('complete!');
      },
      error: function(error) {
      console.log(error)
      }
  });
  
}

function debug_13_throw()
{
  console.log('debug_13_throw+++');
  var source = Observable.throw('kunhu Oop!');

  source.subscribe({
    next: function(value) {
      console.log(value)
    },
    complete: function() {
      console.log('complete!');
    },
    error: function(error) {
      console.log('Throw Error: ' + error)
    }
  });
  
}

function debug_14_timer()
{
  console.log('debug_14_timer+++');
    var source = Observable.create(function(observer) {
      var i = 0;
      setInterval(() => {
          observer.next(i++);
      }, 1000)
      });
      
      source.subscribe({
        next: function(value) {
          console.log(value)
        },
        complete: function() {
          console.log('complete!');
        },
        error: function(error) {
          console.log('Throw Error: ' + error)
        }
      });
  
  var source2 = Observable.interval(1000);

    source2.subscribe({
      next: function(value) {
        console.log('interval:'+value)
      },
      complete: function() {
        console.log('complete!');
      },
      error: function(error) {
        console.log('Throw Error: ' + error)
      }
    }); 
}

function debug_15_interval()
{
  console.log('debug_15_interval+++');
  var source2 = interval(1000);

    source2.subscribe({
      next: function(value) {
        console.log('interval:'+value)
      },
      complete: function() {
        console.log('complete!');
      },
      error: function(error) {
        console.log('Throw Error: ' + error)
      }
    }); 
}

function debug_16_timer()
{
  console.log('debug_16_timer+++');
  var source = timer(1000, 1000);

  source.subscribe({
    next: function(value) {
      console.log(value)
    },
    complete: function() {
      console.log('complete!');
    },
    error: function(error) {
      console.log('Throw Error: ' + error)
    }
  });
  
  source.unsubscribe() // 停止訂閱(退訂)， RxJS 4.x 以前的版本用 dispose()
  
  setTimeout(() => {
        console.log('停止訂閱(退訂)');
  
        source.unsubscribe() // 停止訂閱(退訂)， RxJS 4.x 以前的版本用 dispose()
    }, 5000);
}

function debug_17_interval_map()
{
  console.log('debug_17_interval_map+++');
  var source = interval(1000);
  var newest = source.pipe(map(x => x + 2 + ' kunhu')); 
  var test2 = source.pipe(filter(x => x % 2 === 0 )); 

  var test3 = source.pipe(take(3));


  
  //newest.subscribe(console.log);
  //test2.subscribe(console.log);
  test3.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});
  
}

function debug_18_twoObservable()
{
  console.log('debug_18_twoObservable+++');
  
  var click = interval(1000);
  var source = click.pipe(map(e => of(1,2,3)));
  
  var example = source.pipe(concatAll());
  example.subscribe({
      next: (value) => { console.log(value); },
      error: (err) => { console.log('Error: ' + err); },
      complete: () => { console.log('complete'); }
  });
  
  
}

function uniq(a) {
    var seen = {};
    return a.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
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

function debug_19_jsonExample()
{
  console.log('debug_19_jsonExample+++');
  var json1 =
  {
      id:1,
      label:"music"
   }
   var json2 =
  {
      id:2,
      label:"music"
    }
   var json3 =
  {
      id:3,
      label:"jfla"
    }
  var arr = [json1,json2,json3] 
  var source = from(arr);
  
  /*
    source.subscribe({
      next: function(value) {
        console.log('interval:'+value)
      },
      complete: function() {
        console.log('complete!');
      },
      error: function(error) {
        console.log('Throw Error: ' + error)
      }
    }); 
  */
  var obsever1= 
    {
     next: function(value) {
        console.log('obsever1:'+JSON.stringify(value,null,4));
      }
  }
  source.subscribe(obsever1);
  var new1=source.pipe(map(x=> {return {label:x.label};}));
  console.log("new1:");
  
   var labelArray =[];
  
  new1.subscribe(x => {console.log(x);labelArray.push(x.label)});
  
  //new1=new1.pipe(filter(item=> item.id < 2))
  //console.log("new1 filter:");
  //new1.subscribe(console.log);
  
  var names = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"];
 
   console.log("array filter:"+uniq(names));
   console.log("labelArray:"+JSON.stringify((labelArray),null,4));
   console.log("labelArray filter:"+JSON.stringify(removeDuplicates(labelArray),null,4) );
   
  
}



// array
function debug_20_distinct()
{
  console.log('debug_20_distinct+++');
  var json1 =[
  {
      id:1,
      label:"music1"
   },
    {
      id:2,
      label:"music2"
   }];
    
  var json2 =[
  {
      id:3,
      label:"music3"
   },
    {
      id:4,
      label:"music4"
   }];
  
  var json3 =[
  {
      id:5,
      label:"music5"
   },
    {
      id:6,
      label:"music5"
   }];
  var arr = [json1,json2,json3] ;
  var source = from(arr);
  
  
  var filter1=json1
              .filter(x => x.label=="music2")
              .map(x =>{label: "kunhu"});
                   
  var msg2= new KMessage(1);
  msg2.print(filter1);
  //return ;
  
  var msg= new KMessage(1);
  var obsever1= 
    {
     next: function(value) {
         msg.print(value);
         //value.map(x => {x.label; console.log(x.label))});
         //value.filter(x=> x.label="music5");
      }
  };
  
  //source.subscribe(obsever1);
  
  //var new1=source.pipe(concatMap(x=> return {label:x.label}));
  //var new1=source.pipe(concatMap(res => {console.log(JSON.stringify(res,null,4))})) ;
  msg.setTag('new1');
  var myArray=[];
  var new1=source.pipe(map(e => e.filter(x => {x.label === "music6"; msg.print(x);myArray.push(x.label)}))) ;
  //var new1=source.pipe(filter(e => e.filter(x => {x.label === "music6"; msg.print(x)}) ;
  //console.log("new1:");
  new1.subscribe(obsever1);
  console.log("myArray filter:"+JSON.stringify(removeDuplicates(myArray),null,4) );
  
}

function debug_11_template()
{
  console.log('debug_11_template+++');
  
}
var main_function = function()
{
    console.log('main_function+++');
  
    
    //debug();
    //debug_2();
    //debug_3_next_complete();
    //debug_5_event();
    //debug_6_function();
    //debug_7_javascript_array();
    //debug_8_level2_array();
    //debug_func1_event();
  
    //debug_9_addListener();
    //debug_10_LazyEvaluation();
    //debug_11_of();
    //debug_12_promise();
    //debug_13_throw();
    //debug_14_timer();
    //debug_15_interval();
    //debug_16_timer();
    //debug_17_interval_map();
    //debug_18_twoObservable();
    //debug_19_jsonExample();
    debug_20_distinct();
}
//export
//export const debug_func1_event;
export const main_function;
