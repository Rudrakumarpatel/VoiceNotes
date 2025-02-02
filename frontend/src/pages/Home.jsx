import { useEffect, useState } from "react";
import { fetchNotes } from "../services/noteService.js";
import NoteCard from "../components/NoteCard.jsx";
import Recorder from "../components/Recorder.jsx";
import Navbar from "../components/Navbar.jsx";
import React from "react";

const Home = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes()
      .then((data) => setNotes(data))
      .catch((err) => console.error("Error fetching notes:", err));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Your Notes</h2>
        <Recorder setNotes={setNotes} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {notes.map((note) => (
            <NoteCard key={note._id} note={note} setNotes={setNotes} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
