import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    content: String,
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Note", NoteSchema);
