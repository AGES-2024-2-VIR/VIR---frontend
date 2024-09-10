import { FaHome } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import './style.css';


function Navbar() {
  return (
    <body>
    <div className="navigation">
      <ul>
        <li className="list">
          <a href="#">
            <span className="icon">
              <FaHome className= "home-outline" />
            </span>
          </a>
        </li>

        <li className="list">
          <a href="#">
            <span className="icon">
            <FaBookOpen className= "book-outline" />
            </span>
          </a>
        </li>

        <li className="list">
          <a href="#">
            <span className="icon">
              <FaSearch className= "search-outline"/>
            </span>
          </a>
        </li>
      </ul>
    </div>
    </body>
  );
}

export default Navbar;
