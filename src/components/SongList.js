import React, {Component} from 'react';
import {connect } from 'react-redux';
import {selectSong} from '../actions';

import {Item, Grid, CenterText,  Button, Hr,  } from '../style/style';


class SongList extends Component {

  renderList() {
    return this.props.songs.map((song, i) => {
      return(
       
        <Grid key={song.title}>
        <Item> {song.title}</Item>
            <Button onClick={()=> this.props.selectSong(song)} >
              Select
            </Button>
        <Hr></Hr>
          <Hr></Hr>
        </Grid>
  
      )
    })
  }
  render() {
    console.log(this.props)
    return <div>
      <CenterText>SongList</CenterText>
        <div className = "ui divided list">
          {this.renderList()}
        </div>
      </div>
  }
}

// state contains ALL items in store
const mapStateToProps = (state) => {
  console.log(state);
  return {songs: state.songs}
}
// pass in to connect:
// above function gives us access to state
// also the action creator object
// connect passes these into store.dispatch
// but is mapStateToProps passed to store? 
export default connect(mapStateToProps, {selectSong} )(SongList);