import { useEffect, useRef } from 'react';
import useTwitchEmbed from '../lib/hooks/useTwitchEmbed';
const twitchEmbedURL = "https://player.twitch.tv/js/embed/v1.js";

function Dyframe({streamID, options}) {
    const embedRef = useRef(null);
    const isScriptLoaded = useTwitchEmbed(twitchEmbedURL);

    useEffect(() => {
        if (isScriptLoaded && window.Twitch) {
            const player = window.Twitch.Player(embedRef.current, {
                channel: streamID,
                ...options,
            });

            return () => {
                player.destroy();
            };
        }
    }, [isScriptLoaded, streamID, options]);
    return (
        <div
            className='dyframe-container'
            ref={embedRef}
            style={{
                width: '100%',
                height: '100%',
                position: 'relative',
            }}
        >
        </div>
    );
};

export default Dyframe;