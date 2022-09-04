import React from 'react';
import './App.css';
import Navbar from './components/general/Navbar'
import ItemListContainer from './components/general/ItemListContainer'
import Home from './components/Home'
import Footer from './components/general/Footer'

function App() {
  return (
    <>
        <Navbar/>
        <ItemListContainer name= "Ckrusty Burger" precio= "$40" descripcion= "Quizás sean las dos hamburguesas de carne 100% vacuna con esa salsa especial y queso derretido, el toque de cebolla y la frescura de la lechuga o el crocante del pepino, lo que la hace la hamburguesa más famosa del mundo. Un sabor único." />
        <ItemListContainer name= "Happy Burger" precio= "$75" descripcion= "La belleza radica en la simpleza de las cosas. Una hamburguesa que no se anda con vueltas. La perfecta combinación entre la mejor carne 100% vacuna y dos quesos que lo rodean, junto con el toque del kétchup, mostaza y la cebolla fresca." />
        <ItemListContainer name= "Burger King" precio= "$55" descripcion= "Imaginá la sensación del clásico Cuarto de Libra. Imaginalo con un medallón de deliciosa carne 100% vacuna, queso cheddar, cebolla, kétchup y mostaza ¿Listo? Ahora duplicá esa sensación. Ya tenés el Doble Cuarto en la cabeza." />
        <Home/>
        <Footer/>
    </>
);
}

export default App;
