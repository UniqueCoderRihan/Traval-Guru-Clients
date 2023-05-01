import React, { createContext, useState } from 'react';
import app from '../Firebase/firebase.config';
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";

export const AuthContex = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();


const AuthProviders = ({children}) => {
    const [user,setUser] = useState(null)
    const [Error,SetError] = useState(null)
    // google with
    const SignWithGoogle=()=>{
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            setUser(result.user)
        })
        .catch(error=>{
            SetError(error.message)
        })
    }

    const AuthInfo = {
        user,
        Error,
        SignWithGoogle
    }

    return (
        <AuthContex.Provider
        value={AuthInfo}
        >
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProviders;