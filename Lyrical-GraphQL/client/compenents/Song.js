import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

class Song extends Component {
  displaySong(song) {
    const { title, lyrics } = song;

    return (
      <div>
        <h1>{ title }</h1>

        { lyrics && lyrics.length ? lyrics.map(lyric => <p key={`lyric-${lyric.id}`}>{lyric.content}</p>) : null }
      </div>
    )
  }

  render() {
    const { data = {} } = this.props;
    const { loading, song } = data;

    return (
      <div>
        <h1>Song</h1>

        {!loading ? (song ? this.displaySong(song) : <div>Error...</div>) : <div>Loading...</div>}

        <Link to="/" className="red right">
          Back to Home
        </Link>
      </div>
    );
  }
}

const query = gql`
query ($songId: ID!){
  song(id: $songId) {
    id
    title
    lyrics {
      content
    }
  }
}
`;

export default graphql(query, {
  options: {
    variables: {
      songId: '5b9c7f109b170b972a49c3c8',
    }
  }
})(Song);
