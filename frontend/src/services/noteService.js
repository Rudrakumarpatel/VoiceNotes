import axios from "axios";

const API_URL = `${window.location.origin}/api/notes`;

// Fetch all notes
export const fetchNotes = async () => {
  try {
    const res = await axios.get(API_URL, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return Array.isArray(res.data) ? res.data : [];
  } catch (error) {
    console.error("Error fetching notes:", error);
    return [];
  }
};

// Add a new note
export const addNote = async (content) => {
  try {
    const res = await axios.post(
      API_URL,
      { content },
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    return res.data; 
  } catch (error) {
    console.error("Error adding note:", error.response ? error.response.data : error.message);
    throw new Error("Could not add note"); 
  }
};

// Delete a note
export const deleteNote = async (id) => {
  try {
    const res = await axios.delete(`${API_URL}/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return res.data;
  } catch (error) {
    console.error("Error deleting note:", error.response ? error.response.data : error.message);
    throw new Error("Could not delete note");
  }
};

export const updateNote = async (id, content) => {
  try {
    const res = await axios.put(
      `${window.location.origin}/api/notes/${id}`, 
      { content },
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    return res.data;
  } catch (error) {
    console.error("Error updating note:", error.response ? error.response.data : error.message);
    throw new Error("Could not update note");
  }
};


