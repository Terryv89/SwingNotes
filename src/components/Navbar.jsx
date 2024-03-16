import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <h1>Swing notes</h1>
      <Link to={"/"}>Home</Link>
      <Link to={"/CreateNote"}>Create post</Link>
    </header>
  );
};

export default Navbar;
