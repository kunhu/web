import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Todos123 } from './parties.collection';

Meteor.methods({
  KunhuAddTodo(content: string) {
    //check(content, String);
    
    console.log('??? content='+content);
    //content="kunhu abc";
    
    return Todos123.insert({
      content
    });
  },
  KunhuGet() {
    //check(content, String);
    
    console.log('??? get=');
    //content="kunhu abc";
    
    return Todos123.get({
      
    });
  }
});
