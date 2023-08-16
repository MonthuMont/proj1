const Navbar = () => {
    return(
        <nav className="nav">
        <ul className="list-item">
          <li className="item">
            <a>Profile</a>
          </li>
          <li className="item">
            <a>Messages</a>
          </li>
          <li className="item">
            <a>News</a>
          </li>
          <li className="item">
            <a>Music</a>
          </li>
          <li className="item pad">
            <a>Settings</a>
          </li>
        </ul>
      </nav>
    )
}
export default Navbar;