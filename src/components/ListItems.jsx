import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Item from './Item';

function ListItem () {

  const [items, setItems] = useState([]);
  

  useEffect(() => {
    axios.get("http://localhost:3000/api/object").then((res) => {
      const data = res.data;
      setItems(data);
    });
  }, []);

    return(
      <>
      <h1>List Item</h1>
        {items.map(item => (
          <>
          <Item 
            id={item._id}
            name={item.name}
            type={item.type}
            price={item.price}
            rating={item.rating}
            warranty_years={item.warranty_years}
            available={item.available}
          />
          </>
        ))}
      </>
    )
};

export default ListItem;