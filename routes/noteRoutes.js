import express from "express";
import { getNotes, createNote, deleteNote, updateNote } from "../controllers/noteController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, getNotes);

router.post("/", authMiddleware, createNote);

router.put("/:id", authMiddleware, updateNote); 

router.delete("/:id", authMiddleware, deleteNote);

export default router;
