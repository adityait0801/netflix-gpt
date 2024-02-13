import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { LOGO } from "../utils/constant";

const Header = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();
    
    const user = useSelector(store=>store.user);

      //We have used effect because we have to do signIn or signUp only one time in website
      useEffect( ()=> {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid, email, displayName, photoURL }));
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });

        //unsubscribe the component
        return ()=>unsubscribe();
    },[])

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
            navigate("/error");
          });
    }

    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-20 flex justify-between">
            <img className="w-48" 
            src={LOGO} 
            alt="logo"
            /> 
           {/* when user is signed In then only show/load this */}
            { user && 
                <div className="flex p-4">
                <img className="w-12 h-12" 
                src={user?.photoURL}
                alt="usericon"
                />
                <button onClick={handleSignOut} className="font-bold text-white mx-2">(Sign Out)</button>
                </div>
            }
        </div>
    );
}

export default Header;