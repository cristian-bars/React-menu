import React from 'react';

const MenuMoreDetails = ({ item }) => (
    item? (
        item.map((detail) => (
        <div className="itemDetail">{detail.title}</div>
    ))) : (
        <div>Ni hi ha items</div>
    ))
    
;

export default MenuMoreDetails;