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
    console.log('HI!')
    return (
      <div>
  <h3>ARTIST NAME</h3>
  <h4>ALBUMS</h4>
  {<Albums albums={albums}/>}
  <h4>SONGS</h4>
</div>
    );
  }
}


export default Artist;
