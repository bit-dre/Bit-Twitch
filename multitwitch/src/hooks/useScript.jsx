import { useEffect, useState } from 'react';

const useScript = (scriptUrl, scriptId) => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    // Check if script already exists
    const existingScript = document.getElementById(scriptId);

    if (!existingScript) {
      // Create script if it doesn't exist
      const script = document.createElement('script');
      script.src = scriptUrl;
      script.id = scriptId;
      script.async = true;

      // On successful load
      script.onload = () => {
        setIsScriptLoaded(true);
      };

      // Handle script load failure
      script.onerror = () => {
        console.error(`Error loading script: ${scriptUrl}`);
      };

      // Add script to the document body
      document.body.appendChild(script);
    } 
  }, []);

  return isScriptLoaded;
};

export default useScript;
