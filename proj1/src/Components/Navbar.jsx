
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
            <a href="/news">News</a>
          </li>
          <li className="item">
            <a href="/music"> Music</a>
          </li>
          <li className="item pad">
            <a href="/settings">Settings</a>
          </li>
        </ul>
      </nav>
    )
}
export default Navbar;