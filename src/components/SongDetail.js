import React from 'react';
import {connect } from 'react-redux';
 
import {Item, CenterText, Flex  } from '../style/style';


const Container =(song) => {
  return(
    <div>
        <CenterText>Song Details</CenterText>
          <Flex>
            <div>
            Title: {song.title}
            <br></br>
            Duration: {song.duration}
              </div>
              </Flex>
          
        </div>
        
    
  )
}


// descrtucture props 
const SongDetail = ({song}) => {
  console.log(song)
  if (song) { 
    return (Container(song))
  }  
    return (<Item> Select a Song</Item>)
 
}

const mapStateToProps = (state) => {
  return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail)