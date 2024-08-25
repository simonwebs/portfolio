// src/methods/contacts.methods.ts
import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email';
import { ContactsCollection } from './contacts.collection';

interface ContactInsertParams {
  name: string;
  email: string;
  subject: string;
  description: string;
}

Meteor.methods({
  async 'contacts.insert'({ name, email, subject, description }: ContactInsertParams) {
    if (!name || !email || !subject || !description) {
      throw new Meteor.Error('required-fields', 'All fields are required.');
    }

    try {
      // Use `await` to wait for the insert operation to complete
      const contactId = await ContactsCollection.insertAsync({
        name,
        email,
        subject,
        description,
        createdAt: new Date(),
      });

      // Use `await` to wait for the email sending operation to complete
      await Email.sendAsync({
        to: email,
        from: 'admin@visionlyze.com',
        subject: `Thank you for contacting us, ${name}`,
        text: `Hello ${name},\n\nThank you for contacting me. We have received your message about "${subject}". I will get back to you as soon as possible.\n\nBest regards,\nSimon Agbey`,
        html: `Hello ${name},<br><br>Thank you for contacting me. I have received your message about "${subject}". I will get back to you as soon as possible.<br><br>Best regards,<br>Simon Agbey`,
      });

      return contactId;
    } catch (error) {
     // console.error('Error during operation:', error);
      throw new Meteor.Error('operation-failed', 'An error occurred while processing your request.');
    }
  },

  async 'contacts.archive'({ contactId }: { contactId: string }) {
    try {
      // Use `await` to wait for the update operation to complete
      await ContactsCollection.updateAsync(contactId, { $set: { archived: true } });
    } catch (error) {
    //  console.error('Error archiving contact:', error);
      throw new Meteor.Error('archive-failed', 'Failed to archive contact.');
    }
  },

  async 'contacts.removeMany'(contactIds: string[]) {
    try {
      for (const contactId of contactIds) {
        // Use `await` for each remove operation to ensure it completes before moving to the next
        await ContactsCollection.removeAsync(contactId);
      }
    } catch (error) {
    //  console.error('Error removing contacts:', error);
      throw new Meteor.Error('remove-many-failed', 'Failed to remove contacts.');
    }
  },

  async 'contacts.remove'({ contactId }: { contactId: string }) {
    try {
      // Use `await` to wait for the remove operation to complete
      await ContactsCollection.removeAsync(contactId);
    } catch (error) {
      console.error('Error removing contact:', error);
      throw new Meteor.Error('remove-failed', 'Failed to remove contact.');
    }
  },

  async 'contacts.update'({ contactId, ...fields }: ContactInsertParams & { contactId: string }) {
    try {
      // Use `await` to wait for the update operation to complete
      await ContactsCollection.updateAsync(contactId, { $set: fields });
    } catch (error) {
      console.error('Error updating contact:', error);
      throw new Meteor.Error('update-failed', 'Failed to update contact.');
    }
  },
});
