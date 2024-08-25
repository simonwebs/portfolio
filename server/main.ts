import { Meteor } from 'meteor/meteor';
import '../imports/api/contactsApi';
import appConfig from './appConfig';

Meteor.startup(async () => {
  // Set environment variables
  process.env.MAIL_URL = appConfig.mailUrl;
  process.env.ROOT_URL = appConfig.rootUrl;

  // Access public settings
  const appName: string = (Meteor.settings?.public?.appInfo?.name as string) || 'Simon Agbey';
  console.log(`Starting ${appName} at ${process.env.ROOT_URL}`);
});
