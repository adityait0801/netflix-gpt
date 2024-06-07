import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {

//Fetch data from API and dispatch it to the redux store
const dispatch = useDispatch();

const TopRated = useSelector((store)=> store.TopRated)

    useEffect(()=>{
        !TopRated && getTopRatedMovies();    
    },[]);

    const getTopRatedMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1", API_OPTIONS);
        const json = await data.json();
        // console.log(json.results);
        dispatch(addTopRatedMovies(json.results));
    }
}

export default useTopRatedMovies;

