// server/publications/contacts.publications.ts
import { Meteor } from 'meteor/meteor';
import { ContactsCollection } from './contacts.collection';

Meteor.publish('allContacts', function () {
  return ContactsCollection.find();
});
