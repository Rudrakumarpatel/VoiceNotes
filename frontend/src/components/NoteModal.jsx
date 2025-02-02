import React from "react";

const NoteModal = ({ note, newContent, setNewContent, onClose, onUpdate }) => {
  const handleSave = () => {
    console.log(newContent);
    if (newContent.trim() !== "") {
      onUpdate(newContent);  
    } else {
      alert("Content cannot be empty");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">Edit Note</h2>
        <textarea
          className="w-full border p-2"
          rows="5"
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
        />
        <div className="flex justify-between mt-4">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteModal;
