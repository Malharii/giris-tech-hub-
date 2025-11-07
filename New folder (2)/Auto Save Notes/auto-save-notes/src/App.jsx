import React, { useState, useEffect, useRef } from "react";

function AutoSaveNotes() {
  const [note, setNote] = useState(() => localStorage.getItem("note") || "");
  const [lastSaved, setLastSaved] = useState(
    localStorage.getItem("lastSaved") || "Not saved yet"
  );

  const lastSaveRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      localStorage.setItem("note", note);
      const time = new Date().toLocaleTimeString();
      localStorage.setItem("lastSaved", time);
      setLastSaved(time);
      lastSaveRef.current = time;
      console.log("Note auto-saved at:", time);
    }, 4000);

    return () => clearInterval(interval);
  }, [note]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-purple-200 text-gray-800 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">📝 Auto Save Notes</h1>

        <textarea
          className="w-full h-60 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          placeholder="Start typing your notes..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />

        <div className="mt-4 text-sm text-gray-600 text-center">
          Last Saved: <span className="font-medium text-purple-600">{lastSaved}</span>
        </div>
      </div>
    </div>
  );
}

export default AutoSaveNotes;
