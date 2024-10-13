import React from 'react';
import { Book } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Book size={24} />
          <h1 className="text-2xl font-bold">Bible Journaling App</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Profile</a></li>
            <li><a href="#" className="hover:underline">Settings</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;