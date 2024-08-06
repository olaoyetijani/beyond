import "./navbar.css";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="nav__header">
      <div className="nav__logo">
        <img src={logo} alt="Brand Logo" />
      </div>
      <ul className="nav__nav">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About us</a>
        </li>
        <li>
          <a href="#services">Our Services</a>
        </li>
        <li>
          <a href="#works">Our Works</a>
        </li>
      </ul>
      <div className="beyond__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#000"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#000"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <div className="beyond__navbar-menu_container">
            <ul className="nav__nav-menu">
              <li>
                {" "}
                <a href="#home">Home</a>
              </li>
              <li>
                {" "}
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#works">Works</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
