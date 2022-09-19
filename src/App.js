import React from 'react';
import './App.css';
import Navbar from './components/general/Navbar'
import ItemDetailContainer from './items/ItemDetailContainer';
import Footer from './components/general/Footer'
import ItemListContainer from './items/ItemListContainer';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import TrabajaConNosotros from './components/general/trabajaConNosotros'


function App() {
  return (

    <BrowserRouter>
      <Navbar />
      
      <Routes >
        <Route index element={<ItemListContainer />} />
        <Route path='/detail/:id' element={<ItemDetailContainer/>} />
        <Route path='/TrabajaConNosotros' element={<TrabajaConNosotros/>} />
        <Route
            path='/:categoria'
            element={<ItemListContainer />}
          />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
