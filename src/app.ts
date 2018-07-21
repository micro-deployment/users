import * as express from 'express';
import * as expressGraphql from 'express-graphql';
import schema from './schema';

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
