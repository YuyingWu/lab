import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/fetchSong';

class SongList extends Component {
  render() {
    const { data = {} } = this.props;
    const { loading, songs } = data;

    return (
      <div>
        <h1>song List</h1>

        <ul className="collection">
          { !loading && songs.length ? songs.map(song => (
            <li className="collection-item" key={`song-${song.id}`}><Link to={`/song/${song.id}`}>{ song.title }</Link></li>
          )) : <li>Loading...</li> }
        </ul>

        <Link to="/addsong" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

export default graphql(query)(SongList);
