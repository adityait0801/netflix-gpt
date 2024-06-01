import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {

//Fetch data from API and dispatch it to the redux store
const dispatch = useDispatch();

    useEffect(()=>{
        getNowPlayingMovies();    
    },[]);

    const getNowPlayingMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS);
        const json = await data.json();
        console.log(json.results);
        dispatch(addNowPlayingMovies(json.results));
    }
}

export default useNowPlayingMovies;

