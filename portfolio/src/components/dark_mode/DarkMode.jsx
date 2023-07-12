import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext({
    theme: 'light',
    toggleTheme: () => {}
});

export const DarkModeProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const localDarkMode = window.localStorage.getItem('darkMode') === 'true';
        setDarkMode(localDarkMode);
    }, []);
    
    useEffect(() => {
        window.localStorage.setItem('darkMode', darkMode);
        if (darkMode) {
            document.documentElement.style.setProperty('--bg-colour', 'var(--bg-colour-dark)');
            document.documentElement.style.setProperty('--text-colour', 'var(--text-colour-dark)');
            document.documentElement.style.setProperty('--text-colour-secondary', 'var(--text-colour-2-dark)');
            document.documentElement.style.setProperty('--highlight-colour', 'var(--highlight-colour-dark)');
            document.documentElement.style.setProperty('--contrast-colour', 'var(--contrast-colour-dark)');
        } else {
            document.documentElement.style.setProperty('--bg-colour', 'var(--bg-colour-light)');
            document.documentElement.style.setProperty('--text-colour', 'var(--text-colour-light)');
            document.documentElement.style.setProperty('--text-colour-secondary', 'var(--text-colour-2-light)');
            document.documentElement.style.setProperty('--highlight-colour', 'var(--highlight-colour-light)');
            document.documentElement.style.setProperty('--contrast-colour', 'var(--contrast-colour-light)');
        }
        
    }, [darkMode]);

    return (
      <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
        {children}
      </DarkModeContext.Provider>
    );
};