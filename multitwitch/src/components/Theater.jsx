import React, { useEffect, useRef } from 'react';
import useTwitchEmbedScript from '../lib/hooks/useTwitchEmbedScript';

const Theater = ({ streamers = [] }) => {
  const isScriptLoaded = useTwitchEmbedScript();
  const containerRefs = useRef({});

  useEffect(() => {
    if (isScriptLoaded) {
      // Only create new embeds for streamers that don't already have a player
      streamers.forEach((streamer) => {
        if (
          containerRefs.current[streamer.id] &&
          !containerRefs.current[streamer.id]?.hasChildNodes()
        ) {
          const options = {
            width: '100%',
            height: '100%',
            channel: streamer.name,
            parent: [window.location.hostname],
            layout: 'video', // Removes the chat
            autoplay: true,
            muted: false,
          };

          // Ensure Twitch object is available
          if (window.Twitch && window.Twitch.Player) {
            const player = new window.Twitch.Player(`twitch-embed-${streamer.id}`, options);
            player.addEventListener(window.Twitch.Player.READY, () => {
              player.setMuted(true); // Mute the player initially
            });
          } else {
            console.error('Twitch.Player is not available');
          }
        }
      });

      // Remove players that are no longer in the streamers list
      Object.keys(containerRefs.current).forEach((key) => {
        const ref = containerRefs.current[key];
        if (ref && !streamers.find((streamer) => streamer.id === parseInt(key))) {
          ref.innerHTML = ''; // Clear existing embed if the streamer is removed
        }
      });
    }
  }, [isScriptLoaded, streamers]);

  // Determine the layout based on the number of streamers
  const numStreams = streamers.length;

  let gridStyle = {};

  if (numStreams === 1) {
    gridStyle = {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridTemplateRows: '1fr',
    };
  } else if (numStreams === 2) {
    gridStyle = {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: '1fr',
    };
  } else if (numStreams === 3) {
    gridStyle = {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: '1fr 1fr',
      gridTemplateAreas: `
        "stream0 stream1"
        "stream2 stream2"
      `,
    };
  } else if (numStreams === 4) {
    gridStyle = {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: '1fr 1fr',
    };
  }

  return (
    <div
      className="h-full"
      style={{
        ...gridStyle,
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
      }}
    >
      {streamers.map((streamer, index) => (
        <div
          key={streamer.id}
          ref={(el) => {
            if (el) containerRefs.current[streamer.id] = el;
          }}
          id={`twitch-embed-${streamer.id}`}
          style={{
            width: '100%',
            height: '100%',
            gridArea: numStreams === 3 && index === 2 ? 'stream2' : undefined,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Theater;
