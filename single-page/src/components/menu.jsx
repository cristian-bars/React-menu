import React, { useState } from 'react';
import {main} from '../assets/menu_data.json';

function Menu() {
  const [selectedMenu, setSelectedMenu] = useState(null);
  const item = main.map((item) => (
    <li key={item.key}>
      {item.title}
      <button type="button" onClick={() => setSelectedMenu(item)}>See some details</button>
      {selectedMenu === item }
    </li>
  ));
  return (
    <ul className="list-container">
      {item}
    </ul>
  );
}

export default Menu;
