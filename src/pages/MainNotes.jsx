import { useState, useEffect } from "react";

import ShowNote from "../components/ShowNote";

const ShowNotes = () => {
  const [username, setUsername] = useState("hittepåförattfåblankstart");
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const response = await fetch(
      `https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes/${username}`
    );
    const data = await response.json();
    console.log(data);
    setNotes(data.notes);
  };

  useEffect(() => {
    fetchNotes();
  }, []);
  /*
  const notesFromApiMapTest = notes.map((note) => {
    <Note key={note.id} title={note.title} content={note.content} />;
  });
*/
  return (
    <div className="update">
      <input
        placeholder="username of notes"
        type="text"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <button onClick={fetchNotes}>Get notes</button>
      <ShowNote notes={notes} />
    </div>
  );
};

export default ShowNotes;
