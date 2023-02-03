// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Members, Users, User } = initSchema(schema);

export {
  Members,
  Users,
  User
};