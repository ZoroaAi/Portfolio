import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext({
    theme: 'light',
    toggleTheme: () => {}
});

export const DarkModeProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(() => {
        const localDarkMode = window.localStorage.getItem('darkMode') === 'true';
        return localDarkMode;
    });

    useEffect(() => {
        window.localStorage.setItem('darkMode', darkMode);
        if(darkMode){
            document.body.classList.add("dark");
        }else{
            document.body.classList.remove("dark");
        }
    }, [darkMode]);

    return (
      <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
        {children}
      </DarkModeContext.Provider>
    );
};