const Navbar = () => {
    return(
        <nav className="nav">
        <ul className="list-item">
          <li className="item">
            <a href="/profile">Profile</a>
          </li>
          <li className="item">
            <a href="dialogs">Messages</a>
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