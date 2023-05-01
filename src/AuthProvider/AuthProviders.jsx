import React, { useEffect } from 'react';
import app from '../Firebase/firebase.config';
import { useState } from 'react';
import { createContext } from 'react';

import {FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export const AuthContex = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();


const AuthProviders = ({children}) => {
    const [user,setUser] = useState(null)
    const [Error,SetError] = useState(null)
    // google with
    const SignWithGoogle=()=>{
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            setUser(result.user)
            console.log(result.user);
        })
        .catch(error=>{
            SetError(error.message)
        })
    }
    // facebook
    const signInWithFacebook=()=>{
        signInWithPopup(auth,facebookProvider)
        .then(result=>{
            setUser(result.user)
        })
        .catch(error=>SetError(error.message))
    }

    // createUserWithEmailANdPassWord
    const NewUserEmailAndPassword =(email,password)=>{
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            console.log('Register User SuccesFully ', result.user);
            SetError(null)
        })
        .catch(error=>{
            SetError(error.message);
        })
    }
    // SignIn With Email and password
    const SignInExitingUser=(email,password)=>{
        signInWithEmailAndPassword(auth,email,password)
        .then(result=>{
            console.log('Login User SuccesFully ', result.user);
            SetError(null)
        })
        .catch(error=>{
            SetError(error.message);
        })
    }
    // forgetPassWord
    const ForgetPassWord=(email)=>{
        sendPasswordResetEmail(auth,email)
        .then(console.log('Your Mail Sent'))
        .catch(error=>{
            console.log(SetError(error.message));
        })
    }

    useEffect(()=>{
        const unsubcrive = onAuthStateChanged(auth,loggedUser=>{
            console.log('Logged In User On ',loggedUser);
            setUser(loggedUser)
        })
        return unsubcrive;
    },[])

    const AuthInfo = {
        user,
        Error,
        SignWithGoogle,
        signInWithFacebook,
        NewUserEmailAndPassword,
        SignInExitingUser
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