import { useState } from "react";
import { MenuData } from "../data/MenuData";
import MenuItem from "./MenuItem";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";


const Navbar = () => {

  const [state, setState] = useState(false);

  const handleClick = () => {
    setState(!state);
  }

  return (
    <nav>
      <Link to={"/"}>
        <h2>Ever<span>Green</span></h2>
      </Link>
      <ul className={state ? "menu-list active" : "menu-list"}>
        {MenuData.map((item, index) => (
          <MenuItem key={index} item={item}/>
        ))}
      </ul>
      <div className="menubar">
        <i
          onClick={handleClick}
          className={state ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
        ></i>
      </div>
    </nav>
  );
}
 
export default Navbar;