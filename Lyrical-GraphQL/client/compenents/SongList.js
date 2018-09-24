import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { Link } from 'react-router';
import gql from 'graphql-tag';
import query from '../queries/fetchSong';

class SongList extends Component {
  onDel(songId) {
    const { mutate } = this.props;

    mutate({
      variables: {
        songId,
      },
      refetchQueries: [{
        query,
      }]
    }).then(() => {
      // blah blah
    });
  }

  render() {
    const { data = {} } = this.props;
    const { loading, songs } = data;

    return (
      <div>
        <h1>song List</h1>

        <ul className="collection">
          { !loading && songs.length ? songs.map(song => (
            <li className="collection-item" key={`song-${song.id}`}><Link to={`/song/${song.id}`}>{ song.title }</Link> <div className="right" onClick={this.onDel.bind(this, song.id)}>delete</div></li>
          )) : <li>Loading...</li> }
        </ul>

        <Link to="/addsong" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

const mutation = gql`
mutation($songId: ID!){
  deleteSong(id:$songId) {
    id
  }
}
`

export default compose(
  graphql(query),
  graphql(mutation)
)(SongList);
