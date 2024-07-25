import { useState } from "react";
import { NavLink } from "react-router-dom";

const MenuItem = ({item}) => {

  const [showSubnenu, setShowSubmenu] = useState(false);

  const handleMouseEnter = () => {
    setShowSubmenu(true);
  }

  const handleMouseLeave = () => {
    setShowSubmenu(false);
  }

  return (
    <li
      onMouseEnter={() => setShowSubmenu(true)}
      onMouseLeave={() => setShowSubmenu(false)}
    >
      <NavLink 
        to={item.link}
        onMouseEnter = {handleMouseEnter}
        onMouseLeave = {handleMouseLeave}
        className="menu-links"
      >
        {item.itemName}
        <i className={showSubnenu ? item.iconup : item.icondown}></i>
      </NavLink >
      {item.submenu && showSubnenu && (
        <div
          onMouseLeave = {handleMouseLeave}
          onMouseEnter = {handleMouseEnter}
          className="submenu"
        >
          <ul>
            {item.submenu.map((subItem, index) => (
              <li key={index}>
                <NavLink to={subItem.link}>{subItem.itemName}</NavLink>
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