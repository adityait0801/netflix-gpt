import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {

    const movies = useSelector((store)=> store?.movies)
    //console.log(movies);

    return<div className="bg-black">
            <div className="mt-0 md:-m-auto relative z-20  pl-4 md:pl-12">
                <MovieList title={"Now Playing"} movies={movies?.NowPlayingMovies}/>
                <MovieList title={"Top Rated"} movies={movies?.TopRated}/>
                <MovieList title={"Popular"} movies={movies?.PopularMovies}/>
                <MovieList title={"Upcoming"} movies={movies?.UpcomingMovies}/>
            </div>
    </div> 
}

export default SecondaryContainer;