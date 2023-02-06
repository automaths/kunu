// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Friends, Invitation, Members } = initSchema(schema);

export {
  Friends,
  Invitation,
  Members
};