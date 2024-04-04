import React from 'react';

interface LayoutProps {
  header: React.ReactNode;
  sidebar: React.ReactNode;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ header, sidebar, children }) => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-between bg-gray-200 p-4">{header}</div>
      <div className="flex flex-grow">
        <div className="w-1/4 bg-gray-300 p-4">{sidebar}</div>
        <div className="flex-grow p-4">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
