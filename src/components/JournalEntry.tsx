import React, { useState, useEffect } from 'react';

interface JournalEntryProps {
  book: string;
  chapter: number;
}

interface Entry {
  id: number;
  content: string;
  date: string;
}

const JournalEntry: React.FC<JournalEntryProps> = ({ book, chapter }) => {
  const [entry, setEntry] = useState('');
  const [pastEntries, setPastEntries] = useState<Entry[]>([]);

  useEffect(() => {
    // Simulating fetching past entries
    const fetchPastEntries = async () => {
      // In a real app, you'd fetch from an API
      const dummyEntries = [
        { id: 1, content: 'This is a past entry for ' + book + ' ' + chapter, date: '2023-05-01' },
        { id: 2, content: 'Another past entry for ' + book + ' ' + chapter, date: '2023-05-02' },
      ];
      setPastEntries(dummyEntries);
    };
    fetchPastEntries();
  }, [book, chapter]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically save the entry to your backend
    console.log('Saving entry:', entry, 'for', book, chapter);
    setPastEntries(prev => [...prev, { id: Date.now(), content: entry, date: new Date().toISOString().split('T')[0] }]);
    setEntry('');
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Journal Entry for {book} {chapter}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          className="w-full h-32 p-4 border rounded"
          placeholder="Write your thoughts here..."
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save Entry
        </button>
      </form>
      <div>
        <h3 className="text-xl font-semibold mb-2">Past Entries</h3>
        {pastEntries.map(entry => (
          <div key={entry.id} className="bg-gray-100 p-4 rounded mb-2">
            <p className="text-sm text-gray-600 mb-1">{entry.date}</p>
            <p>{entry.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JournalEntry;