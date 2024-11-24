import { useEffect, useState } from 'react';

function useTwitchEmbedScript() {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    // Check if the script is already included
    const existingScript = document.getElementById('twitch-embed-script');

    if (!existingScript) {
      const script = document.createElement('script');
      script.setAttribute('id', 'twitch-embed-script');
      script.setAttribute('src', 'https://embed.twitch.tv/embed/v1.js');
      script.addEventListener('load', () => {
        setIsScriptLoaded(true);
      });
      script.addEventListener('error', () => {
        console.error('Error loading Twitch Embed script');
      });
      document.body.appendChild(script);
    } else {
      setIsScriptLoaded(true);
    }
  }, []);

  return isScriptLoaded;
}

export default useTwitchEmbedScript;
