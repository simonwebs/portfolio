import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { Contact } from './types/contacts';

export const ContactsCollection = new Mongo.Collection<Contact>('contacts');

const ContactsSchema = new SimpleSchema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  subject: {
    type: String,
  },
  description: {
    type: String,
  },
  archived: {
    type: Boolean,
    defaultValue: false,
  },
  createdAt: {
    type: Date,
  },
});

if (Meteor.isServer) {
  Meteor.startup(() => {
    // Attach schema
    ContactsCollection.attachSchema(ContactsSchema);
    
    // Create indexes
    ContactsCollection.rawCollection().createIndex({ createdAt: -1 });
    ContactsCollection.rawCollection().createIndex({ email: 1 });
  });
}
