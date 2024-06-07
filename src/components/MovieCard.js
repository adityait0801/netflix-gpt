import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const MovieCard = ({ posterPath }) => {

  if (!posterPath) return null;
  return (
    <div className="w-36 md:w-48 pr-4">
      <img className="rounded-xl" alt="Movie Card" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;