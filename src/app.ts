import * as express from 'express';
import * as expressGraphql from 'express-graphql';
import { createConnection } from 'typeorm';

import { User } from './model';
import schema from './schema';

const db = () => {
  const options = {
    database: process.env.DB_NAME,
    entities: [User],
    host: process.env.DB_HOST,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    synchronize: true,
    type: 'postgres',
    username: process.env.DB_USER,
  };

  // @ts-ignore
  return createConnection(options);
};

const server = () => {
  const app = express();

  app.use(
    '/',
    expressGraphql({
      graphiql: process.env.NODE_ENV !== 'production',
      schema,
    }),
  );

  const port = process.env.PORT;
  app.listen(port, () => console.log(`Listening on port ${port}`));
};

const main = async () => {
  await db();
  server();
};

main();
