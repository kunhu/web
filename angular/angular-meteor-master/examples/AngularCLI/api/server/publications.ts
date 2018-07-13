import { Meteor } from 'meteor/meteor';
import { Todos } from './collections';
import { YoutubeItems } from './collections';
Meteor.publish('todos', function () {
  return Todos.find();
});


Meteor.publish('youtubeItems', function () {
  return YoutubeItems.find();
});

Meteor.publish('removeYoutubeItems', function () {
  return YoutubeItems.remove();
});

