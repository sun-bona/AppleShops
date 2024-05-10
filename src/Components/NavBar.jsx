import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logoPNG.png";
import { useState } from "react";
import "./NavBar.css";
const links = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Service",
    path: "service",
  },
  {
    label: "Accessories",
    path: "accessories",
  },
  {
    label: "About",
    path: "about",
  },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="nav-bar" data-aos="fade-down">
      <Link to="/">
        <img className="logo" src={logo} alt="Logo Pages" />
      </Link>
      <button onClick={() => setIsOpen(!isOpen)} className="nav-toggle">
        {isOpen ? <X /> : <Menu />}
      </button>
      <ul className={isOpen ? "nav-lists active" : "nav-lists"}>
        {links.map((link) => (
          <li
            onClick={() => setIsOpen(false)}
            className="nav-link"
            key={link.path}
          >
            <Link to={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
