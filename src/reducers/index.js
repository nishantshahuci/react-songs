import { combineReducers } from 'redux';

// reducers

const songsReducers = () => {
    // return static list
    return [
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'Macarena', duration: '2:30' },
        { title: 'All Star', duration: '3:15' },
        { title: 'I want it that way', duration: '1:45' }
    ];
}

const selectedSongReducer = (action, selectedSong = null) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducers,
    selectedSong: selectedSongReducer
});
