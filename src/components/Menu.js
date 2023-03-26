import React, { useState } from 'react';
import AddItem from './AddItem';
import data from './Data';

const Menu = () => {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart([...cart, item]);
  };
  const styleDiv = {
    display:'inline-flex',
    flexDirection: 'column',
    margin: '25px',
    background: 'white'
  }
  const styleImg = {
    width: '200px',
    borderRadius: '50px',
    margin: '14px'
  }
  const styleP1 = {
    margin: '6px',
    textAlign: 'center',
    fontSize: '9px'
  }
  const styleTitle = {
    background: 'none',
    textAlign: 'center',
    maxWidth: '65%'
  }

  return (
    <div>
      {data.map((item) => (
        <article key={item.id} style={styleDiv}>
          <h3 style={styleTitle}>{item.title}</h3>
          <img src={item.imageId} style={styleImg}/>
          <AddItem item={item} addItem={addItem} />
          <p>Rating:{item.rating}</p>
        </article>
      ))}
    </div>
  );
};

export default Menu;
