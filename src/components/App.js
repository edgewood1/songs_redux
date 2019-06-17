import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';
import {Grid, CenterText, SongListContainer,  } from '../style/style';
 
 

  const App = () => {
  return (
    <SongListContainer>
    <CenterText>SONG APP</CenterText>
      <Grid>
        <SongList />
        <SongDetail />
      </Grid>
      </SongListContainer>
  );
}

export default App;