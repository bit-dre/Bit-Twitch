import React, { useEffect, useRef } from 'react';
import useTwitchEmbedScript from '../lib/hooks/useTwitchEmbedScript';

const Theater = ({ streamers = [] }) => {
  const isScriptLoaded = useTwitchEmbedScript();
  const containerRefs = useRef([]);

  useEffect(() => {
    if (isScriptLoaded) {
      // Clear existing embeds
      containerRefs.current.forEach((ref) => {
        if (ref) {
          ref.innerHTML = '';
        }
      });

      // Create new embeds
      streamers.forEach((streamer, index) => {
        const options = {
          width: '100%',
          height: '100%',
          channel: streamer,
          parent: [window.location.hostname],
          layout: 'video', // Removes the chat
          autoplay: true,
          muted: false,
        };

        // Ensure Twitch object is available
        if (window.Twitch && window.Twitch.Player) {
          new window.Twitch.Player(`twitch-embed-${index}`, options);
        } else {
          console.error('Twitch.Player is not available');
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
      style={{
        ...gridStyle,
        gap: '10px',
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
      }}
    >
      {streamers.map((streamer, index) => (
        <div
          key={index}
          ref={(el) => (containerRefs.current[index] = el)}
          id={`twitch-embed-${index}`}
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
