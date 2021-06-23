import React, { useState } from 'react';
import {main} from '../assets/menu_data.json';
import MenuMoreDetails from './menuMoreDetails';
import './style.css';

function Menu() {
  const [selectedMenu, setSelectedMenu] = useState(null);
  const item = main.map((item) => (
      <div className="listItem">
      <button type="button" onClick={() => setSelectedMenu(item)}>{item.title}</button>
      {
      item.below && (selectedMenu === item && <MenuMoreDetails item={item.below} />)
      }
      </div>
  ));
  return (
      <div className="container">
          <div className="header">
              <img src="https://www.culinaryartsswitzerland.com/bundles/segshared/img/caa/logo-caa.png" alt="culinaryartsswitzerland"/>
          </div>
        <div className="menuList">
            {item}
        </div>
      </div>
    
  );
}

export default Menu;
