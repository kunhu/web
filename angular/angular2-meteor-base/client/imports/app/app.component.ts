import { Component } from '@angular/core';
 
 
 
//import template from './app.component.html';



//template: '<h2>test</h2>'

import { Parties } from '../../../both/collections/parties.collection';
import { Todos123 } from '../../../both/collections/parties.collection';
import { Observable } from "rxjs";

import { MeteorObservable } from 'meteor-rxjs';


//kunhu
//import { Todos } from 'api/server/collections';
import { Todo } from '../../../both/collections/models';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  
  
  parties: Observable<any[]>;


// +++ kunhu copy   
 
   title = 'AngularCLI Meteor Boilerplate';
  todos: Observable<Todo[]>;
  todoContent: string;
  
  ngOnInit() {
    this.todos = MeteorObservable.subscribe('todos123')
      .pipe(switchMap(() => Todos123.find()));
    
    
    //add parties.
    this.parties =MeteorObservable.subscribe('parties')
      .pipe(switchMap(() => Parties.find()));
   
  }
  //addTodo($event: MouseEvent) {
    //$event.preventDefault();
  addTodo(value) {
    this.todoContent=value;
    MeteorObservable.call('KunhuAddTodo', this.todoContent).subscribe(
      res => console.log("kunhu res:"+res),
      err => console.error("kunhu error:"+err)
    );
  }
  
  //-----------------
  
  constructor() {
    this.parties = Parties.find({}).zone();
    //this.parties = Parties.find({}).subscribe(todoCount => console.log(todoCount));
    console.log("1+++ parties:"+this.parties);
    console.log("1+++ parties.name:"+this.parties);
    console.log("my object: %o", this.parties)

    
  }
  //static version
  /*
   parties: any[];

  constructor() {
    
    console.log("1+++");
    this.parties = [
      {'name': 'Dubstep-Free Zone',
        'description': 'Can we please just for an evening not listen to dubstep.',
        'location': 'Palo Alto'
      },
      {'name': 'All dubstep all the time',
        'description': 'Get it on!',
        'location': 'Palo Alto'
      },
      {'name': 'Savage lounging',
        'description': 'Leisure suit required. And only fiercest manners.',
        'location': 'San Francisco'
      }
    ];
  }
 */
}