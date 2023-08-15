import { useState, useEffect } from "react";
import { createContext } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(
        //HELPS TO KEEP THE DARKMODE STATE EVEN IF THE PAGE IS REFRESHED
        JSON.parse(localStorage.getItem("user")) || null
    );

    const login = () => {
       //TO DO
    };


 // write the darkmode state for the website in the local storage
    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(currentUser));

    },[currentUser]);
    
    return(
        <AuthContext.Provider value={{currentUser, login}}>
            {children}

        </AuthContext.Provider>
    )

}