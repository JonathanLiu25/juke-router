import React from 'react';
import Songs from '../components/Songs';
import Albums from '../components/Albums'

class Artist extends React.Component {

  componentDidMount() {
    const artistId = this.props.routeParams.artistId;
    const selectArtist = this.props.selectArtist;
    selectArtist(artistId);
  }

  render() {
    let albums = this.props.artist.albums ? this.props.artist.albums : [];
    let songs = this.props.artist.songs ? this.props.artist.songs : [];
    return (
      <div>
        <h3>{this.props.artist.name}</h3>
        {<Albums albums={albums} />}
        <h4>SONGS</h4>
        <Songs
          songs={songs}
          currentSong={this.props.currentSong}
          isPlaying={this.props.isPlaying}
          toggleOne={this.props.toggleOne} />
      </div>
    );
  }
}


export default Artist;
