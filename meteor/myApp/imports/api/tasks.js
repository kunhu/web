import { Mongo } from 'meteor/mongo';
 
export const Tasks = new Mongo.Collection('tasks');

console.log("kunhu at tasks ???"+Tasks.find({}));
/*
console.log("kunhu at tasks ???"+Tasks.insert({
    text:"kunhu",
    createdAt: new Date(), // current time
  }));
*/