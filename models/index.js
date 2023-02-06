// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ValidatedPhotos, IncomingPhotos, Friends, Invitation, Members } = initSchema(schema);

export {
  ValidatedPhotos,
  IncomingPhotos,
  Friends,
  Invitation,
  Members
};