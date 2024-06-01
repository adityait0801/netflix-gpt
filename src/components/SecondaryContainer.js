import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {

    const movies = useSelector((store)=> store.movies.NowPlayingMovies)

    return <div>
        SecondaryContainer
        <MovieList title={"Now Playing"} movies={movies.nowPlaying}/>
    </div>
}

export default SecondaryContainer;