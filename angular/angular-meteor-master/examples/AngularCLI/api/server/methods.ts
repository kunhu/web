import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Todos } from './collections';

import { YoutubeItems } from './collections';

Meteor.methods({
  addTodo(content: string) {
    check(content, String);
    return Todos.insert({
      content
    });
  }
});


Meteor.methods({
  addYoutubeItems(id: string,label: string) {
    //check(content, String);
    console.log('addYoutubeItems:id:'+id);
    return YoutubeItems.insert({
      id,
      label
    });
  }
});


Meteor.methods({
  removeYoutubeItems(item) {
    //heck(content, String);
    console.log('removeYoutubeItems:'+item);
    return YoutubeItems.remove({
     id:item
    });
  }
});

