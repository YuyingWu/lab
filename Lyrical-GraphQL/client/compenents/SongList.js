import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

class SongList extends Component {
  render() {
    const { data = {} } = this.props;
    const { loading, songs } = data;

    return (
      <div>
        <h1>song List</h1>

        <ul className="collection">
          { !loading && songs.length ? songs.map(song => (
            <li className="collection-item" key={`song-${song.id}`}>{ song.title }</li>
          )) : <li>Loading...</li> }
        </ul>

        <Link to="/addsong" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

const query = gql`
  query {
    songs {
      title
      id
    }
  }
`;

export default graphql(query)(SongList);
