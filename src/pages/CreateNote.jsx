import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateNote = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [title, setTitle] = useState("");
  const [textNote, setNote] = useState("");

  const note = {
    username: username,
    title: title,
    note: textNote,
  };

  async function postNote() {
    const response = await fetch(
      "https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes",
      {
        method: "POST",
        body: JSON.stringify(note),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("funka");

    const data = await response.json();
    console.log(data);
    console.log(data.notes);
    alert("post was created");
    navigate("/");

    return data.notes;
  }

  return (
    <main>
      <input
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        type="text"
        placeholder="Enter username"
      />
      <input
        placeholder="Enter Title"
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <textarea
        onChange={(e) => {
          setNote(e.target.value);
        }}
        type="text"
        placeholder="Enter text"
      />
      <button onClick={postNote}>Submit</button>
    </main>
  );
};

export default CreateNote;
