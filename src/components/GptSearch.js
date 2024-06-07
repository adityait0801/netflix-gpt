import { Netflix_BG_URL } from "../utils/constant";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch =()=> {
  return (
        <>
        <div className="fixed -z-10"> 
                <img className="h-screen object-cover md:h-auto" src={Netflix_BG_URL}
                alt="Netflix Background Image"/>
            </div>
        <div className="md:pt-0">
              <GptSearchBar/>
              <GptMovieSuggestions/>
        </div>
        </>
  )
}

export default GptSearch;