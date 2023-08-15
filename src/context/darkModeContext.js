import { useState, useEffect } from "react";
import { createContext } from "react";

export const DarkModeContext = createContext()

export const DarkModeContextProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(
        //HELPS TO KEEP THE DARKMODE STATE EVEN IF THE PAGE IS REFRESHED
        JSON.parse(localStorage.getItem("darkMode")) || false
    );

    const toggle = () => {
        setDarkMode(!darkMode);
    };


 // write the darkmode state for the website in the local storage
    useEffect(()=>{
        localStorage.setItem("darkMode", darkMode)

    },[darkMode]);
    
    return(
        <DarkModeContext.Provider value={{darkMode, toggle}}>
            {children}

        </DarkModeContext.Provider>
    )

}