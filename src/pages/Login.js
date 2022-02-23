import React from 'react'
import {auth, provider} from "../firestore-config"
import {signInWithPopup} from "firebase/auth"
import {useNavigate} from "react-router-dom"
const Login = ({setIsAuth}) => {
    let navigate = useNavigate();
      const signInWithGoogle = () =>{
          signInWithPopup(auth, provider).then((result)=>{
              localStorage.setItem("isAuth", true); 
            setIsAuth(true);
            navigate("/");
             
          })
      }
    return (
        <div>
            <div className="loginPage">
                <p>Sign in with Google to continue</p>
                <button className="login-with-google-btn" onClick={signInWithGoogle}>Sign in with Google</button>
            </div>
        </div>
    )
}

export default Login
