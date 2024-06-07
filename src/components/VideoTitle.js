import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constant";
import useMovieImage from "../hooks/useMovieImage";
import { useSelector } from "react-redux";

const VideoTitle = ({ title, overview, movieId }) => {
   
    const movieImage = useSelector((store)=> store.movies?.MovieImage)

    useMovieImage(movieId);

    return (
        <div className="w-screen aspect-video pt-[20%] px-8 md:px-24 absolute text-white bg-gradient-to-r from-black">
            <img className=" hidden md:inline-block res-logo md:w-50 rounded-lg h-auto md:h-32 w-16 md:w-40" src={`https://image.tmdb.org/t/p/w220_and_h330_face`+ movieImage} alt={title} />
            <h1 className="font-bold text-lg md:text-4xl">{title}</h1>
            <p className="hidden md:inline-block py-6 text-lg w-3/6">{overview}</p>
            <div className="my-4 md:m-0">
                <button className="bg-white md:bg-white bg-opacity-60 my-2 text-black py-1 md:py-4 px-2 md:px-8 mx-2 text-lg rounded-lg hover:bg-opacity-80"> Play Now</button>
                <button className="hidden md:inline-block bg-gray-500 text-white p-4 px-8 mx-2 text-lg rounded-lg bg-opacity-50">More Info</button>
            </div>
        </div>
    );
};

export default VideoTitle;
