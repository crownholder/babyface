import React from 'react';
import './App.css';
import Menu from './components/Menu'
import Header from './components/Header';
import Footer from './components/Footer';
import ShoppingCart from './components/ShoppingCart';
import TypeOfMenu from './components/TypeOfMenu';


function App() {
  const styleCont ={
    margin: '3px',
    background: '#b7a8d3'
  }
  return (
    <div className="App app-container" id='root'> 
    <Header/>
    <div style={styleCont}>
    <ShoppingCart/>
    <TypeOfMenu title="Entrée"/>
      <Menu/>
    <TypeOfMenu title="Wine"/>
    <TypeOfMenu title="Dessert"/>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
