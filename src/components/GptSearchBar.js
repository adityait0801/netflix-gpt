import { useRef } from "react";
import genAI from "../utils/geminiai";
import { API_OPTIONS } from "../utils/constant";
import openai from "../utils/openai";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar =()=> {

    const searchText = useRef(null);

    const dispatch = useDispatch();

    const searchMovieTMDB =async(movie)=> {
        const response = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', 
        API_OPTIONS )

        const data = await response.json();
        return data.results;
    }  

    const handleGptSearchClick = async() => {
        console.log(searchText.current.value);

    const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query : " +
         searchText.current.value + ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

       // make an api call to GPT API and get results
        // const gptResults = await openai.chat.completions.create({
        //     messages: [{ role: 'user', content: gptQuery }],
        //     model: 'gpt-3.5-turbo',
        //   });

        //   console.log(gptResults.choices);


    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

    const prompt = gptQuery;
        
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const gptMovies = response.text();
    //console.log(gptMovies);
    const aiData = gptMovies.split(', ');
    console.log(aiData);

    const aiInfo = aiData.map((movie)=>searchMovieTMDB(movie))
    //aiInfo will be array of promises [promise, promise, promise, promise, promise]

    const tmdbResults = await Promise.all(aiInfo);
    // Promise.all() takes Promise of array 

    //console.log(tmdbResults);

        dispatch(addGptMovieResult({movieNames :aiData, movieResults : tmdbResults}))
    }

    return <div className=" pt-[45%] md:pt-[10%] flex justify-center">
        <form className="w-auto md:w-1/2 bg-black grid grid-cols-12 rounded-lg" 
            onSubmit={(e)=> e.preventDefault()}>
            <input type="text" 
            ref={searchText}
            className="col-span-9 p-4 m-4 rounded-lg" 
            placeholder="Want some movie suggestions ? ask me"/>
            <button className="col-span-3 m-4 py-2 px-4 bg-red-600 text-white rounded-lg" 
            onClick={handleGptSearchClick}>Search</button>
        </form>
    </div>
}

export default GptSearchBar;