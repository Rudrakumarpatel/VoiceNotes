import { useState } from "react";
import { addNote } from "../services/noteService.js";

const Recorder = ({ setNotes }) => {
  const [recording, setRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [error, setError] = useState(null);

  const startRecording = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setError("Speech Recognition API is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();
    setRecording(true);

    recognition.onresult = (event) => {
      const spokenText = event.results[0][0].transcript;
      setTranscript(spokenText);
      recognition.stop();
      setRecording(false);
    };

    recognition.onerror = (event) => {
      setError("Error with recording: " + event.error);
      setRecording(false);
    };
  };

  const saveNote = async () => {
    if (transcript.trim() !== "") {
      try {
        const newNote = await addNote(transcript);
        setNotes((prevNotes) => [newNote, ...prevNotes]);
        setTranscript("");
      } catch (error) {
        setError(error.message + " Ensure that You are Logged in");
      }
    } else {
      setError("No transcript to save.");
    }
  };

  return (
    <div className="p-4 bg-gray-200 rounded">
      <button
        onClick={startRecording}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {recording ? "Recording..." : "Start Recording"}
      </button>
      <p className="mt-2">{transcript}</p>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {transcript && (
        <button
          onClick={saveNote}
          className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
        >
          Save
        </button>
      )}
    </div>
  );
};

export default Recorder;
