import DeleteNote from "./DeleteNote";
import { Link } from "react-router-dom";

const ShowNote = (props) => {
  const { notes } = props;

  const notesFromApi = notes.map((note, index) => (
    <div key={index}>
      <h3 style={{ textDecoration: "underline" }}>{note.title}</h3>
      <p>{note.note}</p>
      <p style={{ textDecoration: "underline", color: "lightblue" }}>
        {note.username}
      </p>
      <DeleteNote note={note} />
      <Link to={`/updatenote/${note.id}`}>
        <button>Update</button>
      </Link>
    </div>
  ));

  return <section>{notesFromApi}</section>;
};

export default ShowNote;
