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
        <ItemListContainer name= "Burger King" precio= "$55" descripcion= "Imaginá la sensación del clásico Cuarto de Libra. Imaginalo con un medallón de deliciosa carne 100% vacuna, queso cheddar, cebolla, kétchup y mostaza ¿Listo? Ahora duplicá esa sensación. Ya tenés el Doble Cuarto en la cabeza." />
        <Home/>
        <Footer/>
    </>
);
}

export default App;
