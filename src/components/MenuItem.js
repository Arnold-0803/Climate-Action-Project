import { useState } from "react";
import { Link } from "react-router-dom";

const MenuItem = ({item}) => {

  const [showSubnenu, setShowSubmenu] = useState(false);
  const [hover, setHover] = useState(true);

  const handleMouseEnter = () => {
    setHover(false);
  }

  const handleMouseLeave = () => {
    setHover(true);
  }

  return (
    <li
      onMouseEnter={() => setShowSubmenu(true)}
      onMouseLeave={() => setShowSubmenu(false)}
    >
      <Link 
        to={item.link}
        onMouseEnter = {handleMouseEnter}
        onMouseLeave = {handleMouseLeave}
        className="menu-links"
      >
        {item.itemName}
        <i className={hover ? item.icondown : item.iconup}></i>
      </Link >
      {item.submenu && showSubnenu && (
        <div
          onMouseLeave = {handleMouseLeave}
          onMouseEnter = {handleMouseEnter}
          className="submenu"
        >
          <ul>
            {item.submenu.map((subItem, index) => (
              <li key={index}>
                <Link to={subItem.link}>{subItem.itemName}</Link>
              </li>
            )) }
          </ul>
        </div>
        )
      }
    </li>
  );
}
 
export default MenuItem;