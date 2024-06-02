const GptSearchBar =()=> {
    return <div className="pt-[10%] flex justify-center">
        <form className="w-1/2 bg-black grid grid-cols-12 rounded-lg">
            <input type="text" className="col-span-9 p-4 m-4 rounded-lg" placeholder="Want some movie suggestions ? ask me"/>
            <button className="col-span-3 m-4 py-2 px-4 bg-red-600 text-white rounded-lg">Search</button>
        </form>
    </div>
}

export default GptSearchBar;