import { useEffect, useState } from 'react';
const twitchEmbedID = "twitch-embed";
const twitchEmbedURL = "https://player.twitch.tv/js/embed/v1.js";
// Dynamically load streams 
function useTwitchEmbed() {
    const [isScriptLoaded, setIsScriptLoaded] = useState(false);

    useEffect(() => {
        // Check if element does not exist
        const script = document.createElement("script");
        script.src = twitchEmbedURL;
        script.id = twitchEmbedID;
        script.async = true;
        // on successful load
        script.onload = () => {
            console.log("Twitch script loaded successfully");
            setIsScriptLoaded(true);
        }
        script.onerror = () => console.error('Error loading Twitch script');
        // add script to doc body
        document.body.appendChild(script);
        return () => document.body.removeChild(script);
        
    }, []);

    return isScriptLoaded;
} 

export default useTwitchEmbed;