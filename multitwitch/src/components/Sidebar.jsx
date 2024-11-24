import React from 'react';
import IconButton from './IconButton';
import { CollapseIcon, PlusIcon, PersonIcon, FavoriteIcon } from '../assets/Icons.jsx';

const Sidebar = ({ theaterStreamers, removeStreamer }) => {
  return (
    <aside className="w-60 h-screen p-4 bg-[var(--secondary-background)] text-[var(--primary-text)]">
      {/* Your Streamers Section */}
      <div className="flex items-center justify-between mb-6">
        <span className="font-bold text-lg">Your Streamers</span>
        <IconButton 
          icon={CollapseIcon} 
          ariaLabel="Collapse Sidebar" 
          className="text-[var(--secondary-text)] hover:text-[var(--border-hover)]" 
        />
      </div>

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
          {theaterStreamers.map((streamer, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <PersonIcon className="text-[var(--secondary-text)] w-5 h-8" />
                <span className="text-sm">{streamer}</span>
              </div>
              <button
                onClick={() => removeStreamer(streamer)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Liked Streamers Section */}
      <div className="mb-6">
        <span className="font-bold text-lg">Liked Streamers</span>
        <div className="flex flex-col space-y-2 mt-2">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <PersonIcon className="text-[var(--secondary-text)] w-5 h-8" />
                <span className="text-sm">List Option</span>
              </div>
              <FavoriteIcon className="text-[var(--secondary-text)] w-9 h-6 hover:text-[var(--border-hover)]" />
            </div>
          ))}
        </div>
        <div className="mt-2 text-sm text-[var(--secondary-text)] cursor-pointer hover:text-[var(--border-hover)]">Show More</div>
      </div>

      {/* Recommended Section */}
      <div className="mb-4">
        <span className="font-bold text-lg">Recommended</span>
        <div className="flex flex-col space-y-2 mt-2">
          {[...Array(2)].map((_, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <PersonIcon className="text-[var(--secondary-text)] w-5 h-8" />
                <span className="text-sm">List Option</span>
              </div>
              <FavoriteIcon className="text-[var(--secondary-text)] w-9 h-6 hover:text-[var(--border-hover)]" />
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
