import React, { useState } from 'react';
import {main} from '../assets/menu_data.json';
import MenuMoreDetails from './menuMoreDetails';

function Menu() {
  const [selectedMenu, setSelectedMenu] = useState(null);
  console.log(main);
  const item = main.map((item) => (
    <li key={item.key}>
      {item.title}
      <button type="button" onClick={() => setSelectedMenu(item)}>^</button>
      {selectedMenu === item && <MenuMoreDetails item={item.below} />}
    </li>
  ));
  return (
    <ul className="list-container">
      {item}
    </ul>
  );
}

export default Menu;
