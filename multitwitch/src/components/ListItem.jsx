import React from 'react';

const ListItem = ({
  icon: Icon,
  label,
  rightIcon: RightIcon,
  rightIconProps = {},
  noHover = false,
  onClick,
  additionalClass = '',
}) => {
  return (
    <div
      onClick={onClick}
      className={`${noHover ? '' : 'hover:bg-[var(--hover-background)]'} text-[var(--primary-text)] flex items-center justify-between rounded-md px-2 py-2 text-sm cursor-pointer ${additionalClass}`}
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

export default ListItem;
