import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addMovieImage } from "../utils/movieSlice";

const useMovieImage = (movieId)=> {

    const dispatch = useDispatch();

    // const [imageData, setImageData] = useState("");

    const fetchData = async (movieId) => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/images`, API_OPTIONS)
            const data = await response.json();
            // console.log(data);
            // console.log(data.backdrops[0].file_path);
            // setImageData(data.backdrops[0].file_path);
            dispatch(addMovieImage(data.backdrops[10].file_path))
        } catch (error) {
            console.error("Error fetching image data:", error);
        }
    };

    useEffect(() => {
        fetchData(movieId);
    }, [movieId]);

}

export default useMovieImage;