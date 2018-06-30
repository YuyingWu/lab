import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getBooksQuery = gql`
{
  books {
    id
    name
  }
}
`;

class BookList extends Component {
  render() {
    const { data } = this.props;
    const books = data.books || [];

    return (
      <div>
        hello, BookList

        <div>
        {books.map(book => (
          <div key={`book-${book.id}`}>{ book.name }</div>
        ))}
        </div>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
