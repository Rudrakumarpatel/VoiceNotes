import { useState } from "react";
import { deleteNote, updateNote } from "../services/noteService.js";
import NoteModal from "./NoteModal.jsx";

const NoteCard = ({ note, setNotes }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newContent, setNewContent] = useState(note.content);

  const handleDelete = async () => {
    try {
      await deleteNote(note._id);  
      setNotes((prevNotes) => prevNotes.filter((n) => n._id !== note._id));  
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };


  const handleEdit = () => {
    setNewContent(note.content);  
    setIsModalOpen(true);  
  };

  const handleUpdate = async (newContent) => {
    try {
      const updatedNote = await updateNote(note._id, newContent);  // Update backend
      setNotes((prevNotes) =>
        prevNotes.map((n) => (n._id === updatedNote._id ? updatedNote : n))
      );  
      setIsModalOpen(false);  // Close modal
    } catch (error) {
      console.error("Error updating note:", error);
    }
  };

  return (
    <div className="p-4 bg-white shadow rounded">
      <p>{note.content}</p>
      <div className="flex justify-between mt-2">
        <button onClick={handleEdit} className="text-blue-500">Edit</button>
        <button onClick={handleDelete} className="text-red-500">Delete</button>
      </div>

      {isModalOpen && (
        <NoteModal
          note={note}
          newContent={newContent}
          setNewContent={setNewContent}
          onClose={() => setIsModalOpen(false)}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
};

export default NoteCard;
