import React from 'react';
import './App.css';
import Navbar from './components/general/Navbar'
import ItemListContainer from './items/ItemListContainer'
import Home from './components/Home'
import Footer from './components/general/Footer'



function App() {
  return (
    <>
        <Navbar/>
        <ItemListContainer name= "" precio= "" descripcion= "" />
        <ItemListContainer name= "" precio= "" descripcion= "" />
        <Home/>
        <Footer/>
    </>
);
}

export default App;
