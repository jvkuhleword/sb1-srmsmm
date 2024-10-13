import React from 'react';
import { Book, PenTool, Search, User } from 'lucide-react';

interface SidebarProps {
  setCurrentView: (view: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setCurrentView }) => {
  return (
    <aside className="bg-gray-800 text-white w-64 p-6 space-y-6">
      <div className="space-y-2">
        <button
          onClick={() => setCurrentView('bible')}
          className="flex items-center space-x-2 w-full p-2 rounded hover:bg-gray-700"
        >
          <Book size={20} />
          <span>Bible</span>
        </button>
        <button
          onClick={() => setCurrentView('journal')}
          className="flex items-center space-x-2 w-full p-2 rounded hover:bg-gray-700"
        >
          <PenTool size={20} />
          <span>Journal</span>
        </button>
        <button 
          onClick={() => setCurrentView('search')}
          className="flex items-center space-x-2 w-full p-2 rounded hover:bg-gray-700"
        >
          <Search size={20} />
          <span>Search</span>
        </button>
        <button className="flex items-center space-x-2 w-full p-2 rounded hover:bg-gray-700">
          <User size={20} />
          <span>Profile</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;