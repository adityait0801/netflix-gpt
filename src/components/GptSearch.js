import { Netflix_BG_URL } from "../utils/constant";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch =()=> {
  return <div>
            <div className="absolute -z-10"> 
                <img src={Netflix_BG_URL}
                alt="Netflix Background Image"/>
            </div>
              <GptSearchBar/>
              <GptMovieSuggestions/>
        </div>
}

export default GptSearch;