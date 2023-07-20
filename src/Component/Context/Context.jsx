import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';

export const CallContext = createContext()
const auth = getAuth(app)
const Context = ({ children }) => {
    const googleProvider = new GoogleAuthProvider()
    const [loding, setLoding] = useState(false)
    const [users, setUsers] = useState({})
    const [open,setOpen]=useState(null)
    const handleSignUp = (email, password) => {
        setLoding(true)
        console.log(email, password)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const LogInUser = (email,password) => {
        setLoding(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleSignin = () => {
        setLoding(true)
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
    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }
    const LogOut = () => {
        return signOut(auth)
    }
    const user ={loding,handleSignUp,users,LogOut,LogInUser,googleSignin,updateUser,setOpen,open}
    return (
        <div>
            <CallContext.Provider value={user}>
                {children}
            </CallContext.Provider>
        </div>
    );
};
export default Context;