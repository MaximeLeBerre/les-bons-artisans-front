import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Item from './Item';

function ListItem() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/object').then((res) => {
      const data = res.data;
      setItems(data);
    });
  }, [items]);

  return (
    <>
      <div
        style={{
          display: 'flex', justifyContent: 'center', margin: '5%'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
          {items.map((item) => (
            <Item
              key={item._id + 1}
              id={item._id}
              name={item.name}
              type={item.type}
              price={item.price}
              rating={item.rating}
              warrantyYears={item.warranty_years}
              available={item.available}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ListItem;
