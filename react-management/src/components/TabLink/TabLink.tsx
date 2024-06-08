import React from 'react';
import { NavLink } from 'react-router-dom';

interface TabLinkProps {
  to: string;
  text: string;
}

export const TabLink: React.FC<TabLinkProps> = ({ text, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-4 py-2 rounded-t-md border-b-2 transition-colors duration-150 ease-in-out ${
          isActive
            ? 'bg-blue-100 border-blue-600 text-blue-600'
            : 'border-transparent text-gray-600 hover:bg-blue-50'
        }`
      }
    >
      {text}
    </NavLink>
  );
};