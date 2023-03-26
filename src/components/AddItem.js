import React, { useState } from 'react';
import ShoppingCart from './ShoppingCart';

const AddItem = ({ item, onAddToCart }) => {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const style = {
    margin: '13px',
    background: '#554d6d',
    color: 'white',
  }

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const handleAddToCart = () => {
    onAddToCart(item, quantity);
    setQuantity(1);
  };


  return (
    <div>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>${item.price.toFixed(2)}</p>
      <label>Quantity:</label>
      <input type="number" min="1" value={quantity} onChange={handleQuantityChange} /><br></br>
      <button onClick={handleAddToCart} style={style}>Add to Cart</button>
    </div>
  );
};

export default AddItem;

