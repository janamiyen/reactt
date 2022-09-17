import React from 'react';
import './App.css';
import Navbar from './components/general/Navbar'
import ItemDetailContainer from './items/ItemDetailContainer';
import Footer from './components/general/Footer'
import ItemListContainer from './items/ItemListContainer';
import { Route, Routes, BrowserRouter } from 'react-router-dom'


function App() {
  return (

    <BrowserRouter BrowserRouter>
    <Navbar/>
      <Routes Routes>
        <Route index element= {<ItemListContainer/>} />
        <Route path='/detail/:id' element= {<ItemDetailContainer/>} />
      
      </Routes>
        <Footer/>
    </BrowserRouter>

  );
}

export default App;
