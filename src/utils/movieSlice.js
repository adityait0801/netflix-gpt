import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movies',
    initialState: {
        NowPlayingMovies:null,
        TrailerVideo:null,
        MovieImage : null
    },
    reducers: {
        addNowPlayingMovies : (state,action) => {
            state.NowPlayingMovies=action.payload;
        },
        addTrailerVideo : (state,action)=> {
            state.TrailerVideo = action.payload;
        }, 
        addMovieImage : (state, action)=> {
            state.MovieImage = action.payload;
        }
    }
});

export const { addNowPlayingMovies, addTrailerVideo, addMovieImage } = movieSlice.actions;

export default movieSlice.reducer;

