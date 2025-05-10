import { Link } from "react-router-dom";

const NavBar = () => {
  return ( 
    <div className="navbar">
      <h3>Loader App</h3>
      <div className="right">
        <Link to="/">Home</Link>
        <Link to="/create">New File</Link>
      </div>
    </div>
  );
}
 
export default NavBar;