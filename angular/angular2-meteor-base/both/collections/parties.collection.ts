import { MongoObservable } from 'meteor-rxjs';
 
export const Parties = new MongoObservable.Collection('parties');


// Kunhu 2
import { Todo } from './models';

export const Todos123 = new MongoObservable.Collection<Todo>('todos123');