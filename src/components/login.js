import { useRef, useState } from "react";
import Header from "./Header";
import { CheckValidData } from "../utils/Validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login =()=> {

    const [isSignInForm,setIsSignInForm] = useState(true);

    const [errorMessage, setErrorMessage] = useState(null);

    const dispatch=useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    const handleButtonClick =() => {    

        console.log(email.current.value);
        console.log(password.current.value);

        const message = CheckValidData(email.current.value,password.current.value);
        setErrorMessage(message);

        if(message)
        return;

        if(!isSignInForm)
        {
            //SignUp Logic
            createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
                  }).then(() => {
                    // Profile updated!
                    //Store the update in to the redux store
                    const {uid, email, displayName, photoURL }  = auth.currentUser; 
                    dispatch(addUser({uid:uid, email:email, displayName: displayName, photoURL }));
                  }).catch((error) => {
                    // An error occurred
                    setErrorMessage(error.message);
                  });
                // console.log(user);
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+"-"+errorMessage);
            });
        }
        else
        {
            //SignIn Logic
            signInWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+"-"+errorMessage);
            });
        }
    }

    return( 
        <div>
        <Header/>
            <div className="absolute"> 
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_small.jpg" alt="logo"/>
            </div>
            <form onSubmit={(e) => e.preventDefault()}className="w-3/12 absolute p-12 rounded-lg bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-75">
                <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input ref={name} type="name" placeholder="Enter Full Name" className="p-4 my-4 w-full bg-gray-700"/>}
                <input ref={email} type="text" placeholder="Enter Email Address" className="p-4 my-4 w-full bg-gray-700"/>
                <input ref={password} type="password" placeholder="Enter Password" className="p-4 my-4 w-full bg-gray-700"/>   
                <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
                <button className="p-4 my-6 w-full rounded-lg bg-red-700" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className="p-2 cursor-pointer" onClick={toggleSignInForm}> {isSignInForm ? "New to Netflix ? Sign Up Now" : "Already Registered. Sign In"}</p>
            </form> 
        </div>  
    );
}

export default Login;