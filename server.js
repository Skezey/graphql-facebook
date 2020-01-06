const express = require('express')
const expressGraphQL = require('express-graphql')
const schema = require('./schema/schema')

const app = express();

// routes graphql requests to be usable in graphiql interface
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('App launched on port 4000')
});
