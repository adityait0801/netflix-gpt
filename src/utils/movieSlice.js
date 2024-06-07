import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movies',
    initialState: {
        NowPlayingMovies:null,
        TrailerVideo:null,
        MovieImage : null, 
        TopRated : null, 
        PopularMovies : null,
        UpcomingMovies : null,
        SearchMovies : null
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
        },
        addTopRatedMovies : (state, action)=> {
            state.TopRated = action.payload;
        },
        addPopularMovies : (state, action)=> {
            state.PopularMovies = action.payload;
        },
        addUpcomingMovies : (state, action)=> {
            state.UpcomingMovies = action.payload;
        }, 
        searchMovies :(state, action)=> {
            state.SearchMovies = action.payload;
        }
    }
});

export const { addNowPlayingMovies, addTrailerVideo, addMovieImage, addTopRatedMovies, addPopularMovies, addUpcomingMovies } = movieSlice.actions;

export default movieSlice.reducer;

