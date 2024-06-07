import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {

    const movies = useSelector((store)=>store.movies?.NowPlayingMovies);
    //if even before the store is initialized if we access the movie it will give an error beacuse their is no movie inside the store so to resolve that error we just return if no movies are present.
    if(!movies)
    return;

    const mainMovie = movies[0];
    //console.log(mainMovie);

    const {id, original_title, overview} = mainMovie;

    return <div className=" pt-[30%] md:pt-0 bg-black">
        <VideoTitle title={original_title} overview={overview} movieId={id}/>
        <VideoBackground movieId={id}/>
    </div>
};

export default MainContainer;