import React from 'react';

interface BadgeProps {
  text: string;
  color?: string;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ text, color, className = '' }) => {
  return (
    <div
      className={`inline-flex items-center h-9 px-4 rounded-md text-base montreal text-black ${color} ${className} pb-1`}
    >
      {text}
    </div>
  );
};

export default Badge;
