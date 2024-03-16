import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ShowNotes from "./pages/MainNotes";
import CreateNote from "./pages/CreateNote";
import UpdateNote from "./pages/UpdateNote";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ShowNotes />} />
        <Route path="/createnote" element={<CreateNote />} />
        <Route path="/updatenote/:id" element={<UpdateNote />} />
      </Routes>
    </Router>
  );
}

export default App;
