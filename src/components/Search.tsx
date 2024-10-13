import React, { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';

const Search: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<string[]>([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulating search results
    // In a real app, you'd query your backend or Bible API
    setResults([
      `Genesis 1:1 - "In the beginning God created the heavens and the earth."`,
      `John 3:16 - "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life."`,
      `Psalm 23:1 - "The Lord is my shepherd, I lack nothing."`,
    ]);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Search</h2>
      <form onSubmit={handleSearch} className="flex space-x-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search verses or journal entries..."
          className="flex-grow p-2 border rounded"
        />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          <SearchIcon size={20} />
        </button>
      </form>
      {results.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-2">Results</h3>
          <ul className="space-y-2">
            {results.map((result, index) => (
              <li key={index} className="bg-white p-3 rounded shadow">{result}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;