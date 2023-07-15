import { createContext, useContext, useEffect } from "react";

export const LoadingProgressContext = createContext({
    isLoading: true,
    setIsLoading: () => {},
    progress: 0,
    setProgress: () => {},
});

export const Loading = () => {
    const { isLoading, setIsLoading } = useContext(LoadingProgressContext);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsLoading(false);
            console.log('Loading state:' + isLoading);
        }, 3000); // 3 seconds delay

        return () => clearTimeout(timeoutId);
    }, []);

    return null;
}