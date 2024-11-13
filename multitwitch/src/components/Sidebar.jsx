import React from 'react';
import IconButton from './IconButton';
import {
  CollapseIcon,
  PlusIcon,
  PersonIcon,
  FavoriteIcon,
} from '../assets/Icons';

const Sidebar = ({ theme }) => {
  return (
    <aside
      style={{ background: theme.colors.primaryBackground, color: theme.colors.primaryText }}
      className="w-60 h-screen p-4"
    >
      {/* Your Streamers Section */}
      <div className="flex items-center justify-between mb-6">
        <span className="font-bold text-lg">Your Streamers</span>
        <IconButton icon={CollapseIcon} ariaLabel="Collapse Sidebar" className="text-gray-400 w-5 h-5" />
      </div>

      {/* Main Controls Section */}
      <div className="flex items-center justify-between mb-4">
        <span className="font-bold text-lg">Main Controls</span>
        <IconButton icon={PlusIcon} ariaLabel="Add Controls" className="text-gray-400 w-6 h-6" />
      </div>

      {/* Theater Section */}
      <div className="mb-6">
        <span className="font-bold text-lg">Theater</span>
        <div className="flex flex-col space-y-2 mt-2">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <PersonIcon className="text-gray-400 w-5 h-5" />
                <span className="text-sm">List Option</span>
              </div>
              <FavoriteIcon className="text-gray-400 w-5 h-5" />
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
                <PersonIcon className="text-gray-400 w-5 h-5" />
                <span className="text-sm">List Option</span>
              </div>
              <FavoriteIcon className="text-gray-400 w-5 h-5" />
            </div>
          ))}
        </div>
        <div className="mt-2 text-sm text-gray-500 cursor-pointer">Show More</div>
      </div>

      {/* Recommended Section */}
      <div className="mb-4">
        <span className="font-bold text-lg">Recommended</span>
        <div className="flex flex-col space-y-2 mt-2">
          {[...Array(2)].map((_, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <PersonIcon className="text-gray-400 w-5 h-5" />
                <span className="text-sm">List Option</span>
              </div>
              <FavoriteIcon className="text-gray-400 w-5 h-5" />
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
