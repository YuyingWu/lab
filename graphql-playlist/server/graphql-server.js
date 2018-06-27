const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./schema/schema');

const app = express();

// connect to mLab db
const user = 'wyy';
const pw = 'test1234';
mongoose.connect(`mongodb://${user}:${pw}@ds121251.mlab.com:21251/graphql-db`);
mongoose.connection.once('open', () => {
  console.log('connected to mLab');
});

app.get('/', function (req, res) {
  res.send('Hello World');
});

// bind express with graphql
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(5000, () => {
  console.log('now listening for requests on port 5000, http://127.0.0.1:5000/');
});