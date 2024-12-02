// ActionMenu.jsx

import React, { useState } from 'react';
import IconButton from './IconButton';
import {
  PauseIcon,
  PlayIcon,
  CutIcon,
  RemoveIcon,
  UnmutedIcon,
  MuteIcon,
  PersonIcon,
} from '../assets/Icons';
import { motion, AnimatePresence } from 'framer-motion';

const ActionMenu = ({ streamer, removeStreamer }) => {
  const [isActionMenuCollapsed, setActionMenuCollapsed] = useState(true);
  const [isPaused, setPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const toggleMenu = () => {
    setActionMenuCollapsed(!isActionMenuCollapsed);
  };

  const handlePause = () => {
    setPaused(!isPaused);
  };

  const handleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleRemove = () => {
    removeStreamer(streamer.id);
  };

  const actionButtons = [
    {
      icon: isPaused ? PlayIcon : PauseIcon,
      onClick: handlePause,
      key: 'pause',
    },
    {
      icon: isMuted ? UnmutedIcon : MuteIcon,
      onClick: handleMute,
      key: 'mute',
    },
    {
      icon: CutIcon,
      onClick: () => {
      },
      key: 'cut',
    },
    {
      icon: RemoveIcon,
      onClick: handleRemove,
      key: 'remove',
    },
  ];

  return (
    <div className="relative flex items-center">
      <div
        className="flex items-center justify-center rounded-full p-1 bg-[var(--primary-background)] hover:bg-[var(--border-default)] cursor-pointer"
        onClick={toggleMenu}
      >
        <IconButton
          icon={PersonIcon}
          ariaLabel="Streamer Options"
          className="text-[var(--secondary-text)]"
        />
      </div>

      <AnimatePresence>
        {!isActionMenuCollapsed && (
          <motion.div
            className="absolute left-full top-0 flex items-center ml-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {actionButtons.map(({ icon, onClick, key }) => (
              <div
                key={key}
                className="flex items-center justify-center rounded-full p-1 bg-[var(--primary-background)] hover:bg-[var(--border-default)] ml-2 cursor-pointer"
              >
                <IconButton
                  icon={icon}
                  ariaLabel={key}
                  className="text-[var(--secondary-text)]"
                  onClick={onClick}
                />
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ActionMenu;
