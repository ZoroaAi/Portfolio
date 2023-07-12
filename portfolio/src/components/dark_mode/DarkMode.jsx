import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();

export const DarkModeProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const localDarkMode = window.localStorage.getItem('darkMode') === 'true';
        setDarkMode(localDarkMode);
    }, []);
    
    useEffect(() => {
        window.localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    return (
      <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
        {children}
      </DarkModeContext.Provider>
    );
};