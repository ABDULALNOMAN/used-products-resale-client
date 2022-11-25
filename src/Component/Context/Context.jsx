import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';

export const CallContext = createContext()
const auth = getAuth(app)
const Context = ({ children }) => {
    const googleProvider = new GoogleAuthProvider()
    const [loding, setLoding] = useState(true)
    const [users, setUsers] = useState({})
    const handleSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const LogInUser = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleSignin = () => {
        return signInWithPopup(auth,googleProvider)
    }
    useEffect(() => {
        const  unsubcribe = onAuthStateChanged(auth, currentUser => {
            setUsers(currentUser)
            setLoding(false)
        })
        return () => {
            unsubcribe()
        }
    }, [users])
    const LogOut = () => {
        return signOut(auth)
    }
    console.log(users)
    const user ={loding,handleSignUp,users,LogOut,LogInUser,googleSignin}
    return (
        <div>
            <CallContext.Provider value={user}>
                {children}
            </CallContext.Provider>
        </div>
    );
};
export default Context;