import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';

export const CallContext = createContext()
const auth = getAuth(app)
const Context = ({ children }) => {
    const [loding, setLoding] = useState(true)
    const [users, setUsers] = useState({})
    const handleSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    useEffect(() => {
      const unsubcribe = onAuthStateChanged(auth, currentUser => {
          setUsers(currentUser)
        })
        return () => {
            unsubcribe()
        }
    }, [users])
    const LogOut = () => {
        return signOut(auth)
    }
    const LogInUser = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }
    const user ={loding,handleSignUp,users,LogOut,LogInUser}
    return (
        <div>
            <CallContext.Provider value={user}>
                {children}
            </CallContext.Provider>
        </div>
    );
};
export default Context;