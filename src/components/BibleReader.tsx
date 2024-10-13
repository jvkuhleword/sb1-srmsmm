import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import JournalEntry from './JournalEntry';

interface Verse {
  number: number;
  text: string;
}

interface Chapter {
  number: number;
  verses: Verse[];
}

const BibleReader: React.FC = () => {
  const [book, setBook] = useState('Genesis');
  const [chapter, setChapter] = useState(1);
  const [verses, setVerses] = useState<Verse[]>([]);
  const [highlightedVerses, setHighlightedVerses] = useState<number[]>([]);
  const [annotations, setAnnotations] = useState<{[key: number]: string}>({});

  useEffect(() => {
    // Simulating API call to fetch verses
    const fetchVerses = async () => {
      // In a real app, you'd fetch from an API
      const dummyVerses = Array.from({ length: 31 }, (_, i) => ({
        number: i + 1,
        text: `This is verse ${i + 1} of ${book} chapter ${chapter}.`
      }));
      setVerses(dummyVerses);
    };
    fetchVerses();
  }, [book, chapter]);

  const handlePrevChapter = () => {
    if (chapter > 1) setChapter(chapter - 1);
  };

  const handleNextChapter = () => {
    setChapter(chapter + 1);
  };

  const toggleHighlight = (verseNumber: number) => {
    setHighlightedVerses(prev => 
      prev.includes(verseNumber)
        ? prev.filter(v => v !== verseNumber)
        : [...prev, verseNumber]
    );
  };

  const addAnnotation = (verseNumber: number, annotation: string) => {
    setAnnotations(prev => ({ ...prev, [verseNumber]: annotation }));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <select
          value={book}
          onChange={(e) => setBook(e.target.value)}
          className="border rounded p-2"
        >
          <option value="Genesis">Genesis</option>
          <option value="Exodus">Exodus</option>
          {/* Add more books */}
        </select>
        <div className="flex items-center space-x-2">
          <button onClick={handlePrevChapter} className="p-2 bg-gray-200 rounded"><ChevronLeft size={20} /></button>
          <span className="font-bold">Chapter {chapter}</span>
          <button onClick={handleNextChapter} className="p-2 bg-gray-200 rounded"><ChevronRight size={20} /></button>
        </div>
      </div>
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">{book} {chapter}</h2>
        {verses.map((verse) => (
          <div key={verse.number} className="mb-2">
            <span 
              className={`cursor-pointer ${highlightedVerses.includes(verse.number) ? 'bg-yellow-200' : ''}`}
              onClick={() => toggleHighlight(verse.number)}
            >
              <sup>{verse.number}</sup> {verse.text}
            </span>
            {annotations[verse.number] && (
              <div className="ml-6 text-sm text-gray-600 italic">
                Note: {annotations[verse.number]}
              </div>
            )}
            <button 
              onClick={() => {
                const annotation = prompt('Add an annotation:');
                if (annotation) addAnnotation(verse.number, annotation);
              }}
              className="ml-2 text-xs text-blue-600 hover:underline"
            >
              Add note
            </button>
          </div>
        ))}
      </div>
      <JournalEntry book={book} chapter={chapter} />
    </div>
  );
};

export default BibleReader;