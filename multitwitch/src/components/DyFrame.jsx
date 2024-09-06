import { useEffect, useRef } from 'react';
const twitchEmbedURL = "https://player.twitch.tv/js/embed/v1.js"
function Dyframe({streamID}) {
    const embedRef = useRef(null);
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