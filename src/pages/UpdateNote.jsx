import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UpdateNote = () => {
  const { id } = useParams();
  const [newNote, setNewNote] = useState("");
  const navigate = useNavigate();

  async function updateNote() {
    let response = await fetch(
      `https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes/${id}`,
      {
        method: "PUT",
        body: JSON.stringify({ note: newNote }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      console.log("updated");
      navigate("/");
    } else {
      console.log("koko");
    }
  }

  return (
    <section className="update">
      <p>enter text to update the old text</p>
      <input
        onChange={(e) => {
          setNewNote(e.target.value);
        }}
        type="text"
        name=""
        id=""
      />
      <button onClick={updateNote}>Click for update</button>
    </section>
  );
};

export default UpdateNote;
