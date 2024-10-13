import React, { useState } from 'react';
import { Book, PenTool, Search as SearchIcon, User } from 'lucide-react';
import BibleReader from './components/BibleReader';
import JournalEntry from './components/JournalEntry';
import Search from './components/Search';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  const [currentView, setCurrentView] = useState('bible');
  const [currentBook, setCurrentBook] = useState('Genesis');
  const [currentChapter, setCurrentChapter] = useState(1);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar setCurrentView={setCurrentView} />
        <main className="flex-1 p-6">
          {currentView === 'bible' && <BibleReader />}
          {currentView === 'journal' && <JournalEntry book={currentBook} chapter={currentChapter} />}
          {currentView === 'search' && <Search />}
        </main>
      </div>
    </div>
  );
}

export default App;