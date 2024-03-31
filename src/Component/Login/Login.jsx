import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase,/firebase.config";
import { useState } from "react";



const Login = () => {
    const [user,setUser]=useState("")
    const auth=getAuth(app)
    const provider=new GoogleAuthProvider()
    const gitPorvider=new GithubAuthProvider()
    const handleOnclick=()=>{
        signInWithPopup(auth,provider)
        .then((result) => {
            const results=result.user;
            setUser(results)
            console.log(results);
        }).catch((err) => {
            console.log(err.message);
        });
    }
    const handleGit=()=>[
        signInWithPopup(auth,gitPorvider)
        .then((result) => {
            const users=result.user
            setUser(users)
        }).catch((err) => {
            console.log(err.message);
        })
    ]
    const logout=()=>{
        signOut(auth)
        .then((result) => {
            setUser('')
        }).catch((err) => {
            console.log(err.message);
        });
    }
    return (
        <div>
            {user?<button onClick={logout}>Logout</button>
            :
           <>
            <button onClick={handleOnclick}>Login with google</button>
            <button onClick={handleGit}>login with gitub</button>  
           </>
        }

           
            {
                user && <div>
                    <h3>{user.displayName}</h3>
                    <h3>{user.email}</h3>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;