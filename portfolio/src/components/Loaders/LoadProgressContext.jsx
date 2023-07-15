import { createContext } from "react";


export const LoadingProgressContext = createContext({
    progress: 0,
    setProgress: () => {}
});