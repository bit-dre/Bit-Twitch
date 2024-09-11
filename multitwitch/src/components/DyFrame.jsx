import { Component, useEffect, useRef } from 'react';
import useTwitchEmbed from '../lib/hooks/useTwitchEmbed';

function Dyframe({ streamID , options }) {
    const embedRef = useRef(null);
    const isScriptLoaded = useTwitchEmbed();
    // on mount check if script is loaded and Twitch player exists
    useEffect(() => {
        // from here create twitch player
        if (isScriptLoaded && Twitch) {
            console.log('Twitch player is being created');
            const player = new Twitch.Player(embedRef.current, {
                channel: streamID,
                parent: ['localhost', '127.0.0.1'],
                ...options,
            });

            return () => {
                console.log('Destroying player');
                player.destroy();
            };
        }
    }, [streamID, options]);
    return (
        <div
            className='dyframe-container'
            ref={embedRef}
        />
    );
};

export default Dyframe;