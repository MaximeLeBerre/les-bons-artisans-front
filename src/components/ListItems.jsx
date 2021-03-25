import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Item from './Item';
import ButtonAdd from './Button';

function ListItem() {
  const [items, setItems] = useState([]);
  const token = localStorage.getItem('token');

  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  useEffect(() => {
    axios.get('http://localhost:5000/api/object', axiosConfig).then((res) => {
      const data = res.data;
      setItems(data);
    });
  }, [items]);

  return (
    <>
      {token
        ? (
          <>
            <h1 style={{ textAlign: 'center' }}>Liste des objets</h1>
            <ButtonAdd />
          </>
        ) : (
          <h1 style={{ textAlign: 'center' }}>Bienvenue, connectez-vous !</h1>
        )}
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
