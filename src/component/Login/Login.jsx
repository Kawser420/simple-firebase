import React, { useState } from 'react';
import { GithubAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init';
import { GoogleAuthProvider } from 'firebase/auth';


const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser);
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }

    const githubProvider = new GithubAuthProvider();
    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setUser(loggedUser)
        })
        .catch(error => {
            console.log(error);
        })
    }

    const handleGoogleSignOut = () => {
        const auth = getAuth();
        signOut(auth)
            .then(result => {
                console.log(result);
                setUser(null)
                    .catch(error => {
                        console.log(error);
                    })
            })
    }
    return (
        <div>
            {user ?
                <button onClick={handleGoogleSignOut}>Sign Out</button> :
                <>
                    <button onClick={handleGoogleSignIn}>Sign In</button>
                    <button onClick={handleGithubSignIn}>Github Login</button>
                </>
            }
            {user && <div>
                <h2>User: {user.displayName}</h2>
                <h4>Email: {user.email}</h4>
                <p>Image URL: {user.reloadUserInfo.photoUrl}</p>
            </div>
            }
        </div>
    );
};

export default Login;