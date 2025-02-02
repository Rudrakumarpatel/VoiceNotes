import Note from "../models/Note.js";

export const getNotes = async (req, res) => {
  const notes = await Note.find({ userId: req.user.id }).sort({ createdAt: -1 });
  res.json(notes);
};

export const createNote = async (req, res) => {
  try {
    const { content } = req.body;
    const newNote = new Note({
      userId: req.user.id,
      content,
    });

    await newNote.save();
    res.json(newNote);
  } catch (error) {
    console.error("Error creating note:", error);
    res.status(500).json({ message: "Error creating note" });
  }
};

// Update note by ID
export const updateNote = async (req, res) => {
  try {
    const { content } = req.body; 
    const { id } = req.params; 

    const updatedNote = await Note.findByIdAndUpdate(id, { content }, { new: true });

    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.json(updatedNote); 
  } catch (error) {
    console.error("Error updating note:", error);
    res.status(500).json({ message: "Error updating note" });
  }
};

// Delete note by ID
export const deleteNote = async (req, res) => {
  try {
    const { id } = req.params; 
    const deletedNote = await Note.findByIdAndDelete(id);

    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.json({ message: "Note deleted successfully" });
  } catch (error) {
    console.error("Error deleting note:", error);
    res.status(500).json({ message: "Error deleting note" });
  }
};
