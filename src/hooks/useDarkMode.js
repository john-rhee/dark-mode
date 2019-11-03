import useLocalStorage from './useLocalStorage';
import { useEffect } from 'react';

const useDarkMode = (key, value) => {
    const [someValue, setSomeValue] = useLocalStorage(key,value) 

    useEffect(() => {
        if (someValue) {
            document.querySelector('body').classList.add('dark-mode');
        } else {
            document.querySelector('body').classList.remove('dark-mode');
        }

    }, [someValue]);

    return [someValue, setSomeValue];

};

export default useDarkMode;
