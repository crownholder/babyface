import React, { useState } from "react";


const ShoppingCart = () => { 
  const [cart, setCart] = useState([]);
  const styleCart = {
    position: 'fixed',
    background: 'white',
    maxWidth: '30%',
    paddingBottom: '5px',
    margin: '10px',
  }
  const styleLog = {
    color: 'blue',
    margin: '1px',
  }
  const styleButton = {
    background: 'purple',
    color: 'white',
  }


  return (
    <div style={styleCart}>
      <div>
        <h4>Hi, <em>Michael Kees</em></h4>
        <div id="logStatus"><p style={styleLog}> Logged In</p></div>
        <button>log out</button>
        <p>Items in Cart: {cart.length}</p>
        <button style={styleButton}>Reservation</button>
      </div>
    </div>
  );
};

export default ShoppingCart;

