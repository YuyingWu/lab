import React, { Component } from 'react';
import BookList from './components/BookList';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <h1>hello, world</h1>
          <BookList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
