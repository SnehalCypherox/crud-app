import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <header className="navbar">
        <Link to="/" className="nav-link">
          <span className="main-title">CRUD</span>
        </Link>

        <ul className="nav">
          <li>
            <Link to="/add" className="nav-link">
              Add Student
            </Link>
          </li>
          <li>
            <Link to="/all" className="nav-link">
              Student List
            </Link>
          </li>
        </ul>
      </header>
    )
}

export default NavBar;