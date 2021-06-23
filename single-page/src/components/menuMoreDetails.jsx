import React from 'react';

const MenuMoreDetails = ({ item }) => (
    item? (
        item.map((detail) => (
        <li>{detail.title}</li>
    ))) : (
        <div>Ni hi ha items</div>
    ))
    
;

export default MenuMoreDetails;