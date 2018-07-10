import { Meteor } from 'meteor/meteor';
import { Todos123 } from '../both/collections/parties.collection';
import { Parties } from '../both/collections/parties.collection';

Meteor.publish('todos123', function () {
  return Todos123.find();
});


Meteor.publish('parties', function () {
  return Parties.find();
});

