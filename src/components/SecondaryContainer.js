import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {

    const movies = useSelector((store)=> store?.movies)
    //console.log(movies);

    return<div className="bg-black">
            <div className="-m-auto relative z-20 pl-20">
                <MovieList title={"Now Playing"} movies={movies?.NowPlayingMovies}/>
                <MovieList title={"Top Rated"} movies={movies?.TopRated}/>
                <MovieList title={"Popular"} movies={movies?.PopularMovies}/>
                <MovieList title={"Upcoming"} movies={movies?.UpcomingMovies}/>
            </div>
    </div> 
}

export default SecondaryContainer;