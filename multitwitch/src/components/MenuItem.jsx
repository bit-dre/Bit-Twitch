import React from 'react';

const MenuItem = ({ icon: Icon, label, rightIcon: RightIcon, rightIconProps = {}, noHover = false, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`${noHover ? '' : 'hover:bg-[var(--hover-background)]'} text-[var(--primary-text)] flex items-center justify-between rounded-md px-2 py-2 text-sm cursor-pointer`}
      role="menuitem"
    >
      <div className="flex items-center">
        {Icon && <Icon className="mr-2 w-5 h-5 text-[var(--primary-text)]" />}
        <span>{label}</span>
      </div>
      {RightIcon && (typeof RightIcon === 'function' ? <RightIcon {...rightIconProps} /> : <RightIcon className="w-4 h-4 text-[var(--primary-text)]" />)}
    </div>
  );
};

export default MenuItem;
