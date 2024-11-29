import React, { useState } from 'react';
import IconButton from './IconButton';
import { CollapseIcon, ExpandIcon, PlusIcon, PersonIcon, FavoriteIcon, RemoveIcon } from '../assets/Icons.jsx';
import ListItem from './ListItem';

const Sidebar = ({ isCollapsed, toggleSidebar, theaterStreamers, removeStreamer, addStreamerToTheater }) => {
  const [likedStreamers, setLikedStreamers] = useState([
    { id: 5, name: 'OliverOG' },
    { id: 6, name: 'venofn' },
    { id: 7, name: 'nadeshot' },
    { id: 8, name: 'fnpaper' },
    { id: 9, name: 'HydraSZN' },
    { id: 10, name: 'thesketchreal' },
  ]);

  const favoriteStreamer = (streamer) => {
    if (theaterStreamers.length < 4) {
      addStreamerToTheater({ id: Date.now(), name: streamer.name });
      setLikedStreamers(likedStreamers.filter((s) => s.id !== streamer.id));
    } else {
      alert('Theater is full. Remove a streamer to add a new one.');
    }
  };

  const unfavoriteStreamer = (streamer) => {
    setLikedStreamers([...likedStreamers, streamer]);
    removeStreamer(streamer.id);
  };

  return (
    <aside
      className={`transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-60'} h-full flex flex-col`}
      style={{
        backgroundColor: isCollapsed ? 'transparent' : 'var(--secondary-background)',
        overflowY: 'auto', // Enable vertical scrolling
      }}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between w-full mb-4 p-2">
        {!isCollapsed && <span className="font-bold text-lg">Your Streamers</span>}
        <IconButton
          icon={isCollapsed ? ExpandIcon : CollapseIcon}
          ariaLabel={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
          className="text-[var(--secondary-text)] hover:text-[var(--border-hover)]"
          onClick={toggleSidebar}
        />
      </div>

      {isCollapsed ? (
        <div className="flex flex-col items-center space-y-4 p-2">
          <IconButton
            icon={PlusIcon}
            ariaLabel="Open controls"
            className="text-[var(--secondary-text)] hover:text-[var(--border-hover)]"
          />
          {theaterStreamers.map((streamer) => (
            <IconButton
              key={streamer.id}
              icon={PersonIcon}
              ariaLabel={streamer.name}
              onClick={() => unfavoriteStreamer(streamer)}
              className="text-[var(--secondary-text)] hover:text-[var(--border-hover)] w-6 h-6"
            />
          ))}
        </div>
      ) : (
        <div className="p-2">
          {/* Main Controls Section */}
          <div className="flex items-center justify-between mb-4">
            <span className="font-bold text-lg">Main Controls</span>
            <IconButton
              icon={PlusIcon}
              ariaLabel="Open controls"
              className="text-[var(--secondary-text)] hover:text-[var(--border-hover)]"
            />
          </div>

          {/* Theater Section */}
          <div className="mb-6">
            <span className="font-bold text-lg">Theater</span>
            <div className="flex flex-col space-y-2 mt-2">
              {theaterStreamers.map((streamer) => (
                <ListItem
                  key={streamer.id}
                  icon={PersonIcon}
                  label={streamer.name}
                  rightIcon={() => (
                    <IconButton
                      icon={RemoveIcon}
                      ariaLabel="Remove Streamer"
                      onClick={() => unfavoriteStreamer(streamer)}
                      className="text-red-500 hover:text-red-700 w-5 h-5"
                    />
                  )}
                />
              ))}
            </div>
          </div>

          {/* Liked Streamers Section */}
          <div className="mb-6">
            <span className="font-bold text-lg">Liked Streamers</span>
            <div className="flex flex-col space-y-2 mt-2">
              {likedStreamers.map((streamer) => (
                <ListItem
                  key={streamer.id}
                  icon={PersonIcon}
                  label={streamer.name}
                  rightIcon={() => (
                    <IconButton
                      icon={FavoriteIcon}
                      ariaLabel="Favorite Streamer"
                      onClick={() => favoriteStreamer(streamer)}
                      className="text-[var(--secondary-text)] w-5 h-5 hover:text-[var(--border-hover)]"
                    />
                  )}
                />
              ))}
            </div>
            <div className="mt-2 text-sm text-[var(--secondary-text)] cursor-pointer hover:text-[var(--border-hover)]">
              Show More
            </div>
          </div>

          {/* Recommended Section */}
          <div className="mb-4">
            <span className="font-bold text-lg">Recommended</span>
            <div className="flex flex-col space-y-2 mt-2">
              {[...Array(2)].map((_, index) => (
                <ListItem
                  key={index}
                  icon={PersonIcon}
                  label="List Option"
                  rightIcon={FavoriteIcon}
                  rightIconProps={{
                    className:
                      'text-[var(--secondary-text)] w-5 h-5 hover:text-[var(--border-hover)]',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
