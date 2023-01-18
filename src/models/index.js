// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Car, Engine, Trunk } = initSchema(schema);

export {
  Car,
  Engine,
  Trunk
};