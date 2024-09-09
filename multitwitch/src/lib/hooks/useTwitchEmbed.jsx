import { useEffect, useState } from 'react';
// Dynamically load streams 
function useTwitchEmbed({scriptURL}) {
    const [isScriptLoaded, setIsScriptLoaded] = useState(false);

    useEffect(() => {
        const currentScript = document.querySelector('script[src="${scriptURL}"]');
        // if the script does not exist in the DOM yet then we add it 
        if (!currentScript) {
            const script = document.createElement("script");
            script.src = scriptURL;
            script.async = true;
            script.onload = () => setIsScriptLoaded(true);
            script.onerror = () => console.error('Error loading Twitch script');
            document.body.appendChild(script);
        }
        else {
            setIsScriptLoaded(true);
        }
    }, [scriptURL]);

    return isScriptLoaded;
} 

export default useTwitchEmbed;