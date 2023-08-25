import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="list-item">
        <li className="item">
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li className="item">
          <NavLink to="/dialogs">Messages</NavLink>
        </li>
        <li className="item">
          <NavLink to="/news">News</NavLink>
        </li>
        <li className="item">
          <NavLink to="/music"> Music</NavLink>
        </li>
        <li className="item pad">
          <NavLink to="/settings">Settings</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
