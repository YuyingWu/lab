import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';
import fetchSongQuery from '../queries/fetchSong';

class AddSong extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    const value = this.element.value;
    const { mutate } = this.props;

    if (!value) {
      return;
    }

    mutate({
      variables: {
        title: value
      },
      refetchQueries: [{
        query: fetchSongQuery,
      }]
    }).then(() => {
      // const { data } = res;
      // const { addSong } = data;
      // alert(`Successfully add new song: ${addSong.title}`);

      hashHistory.push('/');
    });
  }

  render() {
    return (
      <div>
        <h1>Add Song</h1>

        <form>
          <label>title</label>
          <input type="text" ref={ref => this.element = ref} />
          <div className="btn btn-primary" onClick={this.onSubmit}>Submit</div>
        </form>

        <Link to="/">Go Back</Link>
      </div>
    );
  }
}

const mutation = gql`
mutation addSong($title: String) {
  addSong(title: $title) {
    title
  }
}
`;

export default graphql(mutation)(AddSong);
