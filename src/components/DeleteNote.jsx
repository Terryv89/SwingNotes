const DeleteNote = ({ note }) => {
  async function deleteNote() {
    let response = await fetch(
      `https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com/api/notes/${note.id}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      alert("delete done");
    } else {
      console.log(note.id);
      alert("fail");
    }
  }

  return <button onClick={deleteNote}>Delete</button>;
};

export default DeleteNote;
