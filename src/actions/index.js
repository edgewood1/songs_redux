// action creator

export const selectSong = (song) => {
  // return an action
  return {
    type: 'SONG_SELECTED',
    payload: song,
  }
}


// default or named exports
// named exports allows to send multiple exports
// named - need curly braces