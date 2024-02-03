import { useState } from "react";
import Header from "./Header";

const Login =()=> {

    const [isSignInForm,setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    return( 
        <div>
        <Header/>
            <div className="absolute"> 
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_small.jpg" alt="logo"/>
            </div>
            <form className="w-3/12 absolute p-12 rounded-lg bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-75">
                <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input type="name" placeholder="Enter Full Name" className="p-4 my-4 w-full bg-gray-700"/>}
                <input type="text" placeholder="Enter Email Address" className="p-4 my-4 w-full bg-gray-700"/>
                <input type="password" placeholder="Enter Password" className="p-4 my-4 w-full bg-gray-700"/>   
                <button className="p-4 my-6 w-full rounded-lg bg-red-700">{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className="p-2 cursor-pointer" onClick={toggleSignInForm}> {isSignInForm ? "New to Netflix ? Sign Up Now" : "Already Registered. Sign In"}</p>
            </form> 
        </div>  
    );
}

export default Login;