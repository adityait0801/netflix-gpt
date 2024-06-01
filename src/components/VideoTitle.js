import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constant";
import useMovieImage from "../hooks/useMovieImage";
import { useSelector } from "react-redux";

const VideoTitle = ({ title, overview, movieId }) => {
   
    const movieImage = useSelector((store)=> store.movies.MovieImage)

    useMovieImage(movieId);

    // const fetchData = async (movieId) => {
    //     try {
    //         const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/images`, API_OPTIONS)
    //         const data = await response.json();
    //         // console.log(data);
    //         // console.log(data.backdrops[0].file_path);
    //         setImageData(data.backdrops[0].file_path);
    //     } catch (error) {
    //         console.error("Error fetching image data:", error);
    //     }
    // };

    // useEffect(() => {
    //     fetchData(movieId);
    // }, [movieId]);

    return (
        <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
            <img className="res-logo w-50 rounded-lg h-32 w-40" src={`https://image.tmdb.org/t/p/w220_and_h330_face`+ movieImage} alt={title} />
            <h1 className="font-bold text-4xl">{title}</h1>
            <p className="py-6 text-lg w-3/6">{overview}</p>
            <div className="">
                <button className="bg-white text-black p-4 px-8 mx-2 text-lg rounded-lg hover:bg-opacity-80"> Play Now</button>
                <button className="bg-gray-500 text-white p-4 px-8 mx-2 text-lg rounded-lg bg-opacity-50">More Info</button>
            </div>
        </div>
    );
};

export default VideoTitle;
