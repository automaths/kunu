// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Users, User } = initSchema(schema);

export {
  Users,
  User
};