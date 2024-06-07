import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";

const useMovieSearch =(movie)=> {

    const dispatch = useDispatch();

    useEffect(()=>{
        searchMovie();
    }, [])

    const searchMovie=async()=> {
        const response = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', 
            API_OPTIONS )
    
            const json = await response.json();
            const data = json.results;
            dispatch(searchMovie(data));
    }
} 

export default useMovieSearch;
