


import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Login from './Pages/Login';
import ToyCategory from './Pages/ToyCategory';
import mariotoy from './Components/images/mariotoy.png';
import lugitoy from './Components/images/Luigi.png';
import spidermantoy from './Components/images/spidermantoy.png';
import wonderwomantoy from './Components/images/wonderwomantoy.png';
import clifordbigredtoy from './Components/images/Cliffordbigredtoy.png';
import captainamerica from './Components/images/captainamerica.png';
import captainamericaimage from './Components/images/captainamericaimage.png'
import ToyProduct from './Pages/ToyProduct';
import Cart from './Pages/Cart';
import ToyContextProvider from './Context/ToyContextProvider';
import Footer from './Components/Footer/Footer';



export const BACKEND_URL = 'http://localhost:3000';


function App() {


  return (
      <>  

      <ToyContextProvider>
      <BrowserRouter>
          <Header />
        <Navbar />
          <Routes>
            <Route path='/' element={<Home gender="all" />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/mario' element={<ToyCategory image={mariotoy} category='mario' />} />
            <Route path='/lugi' element={<ToyCategory image={lugitoy} category='lugi' />} />
            <Route path='/spiderman' element={<ToyCategory image={spidermantoy} category='spiderman' />} />
            <Route path='/wonderwoman' element={<ToyCategory image={wonderwomantoy} category='wonderwoman' />} />
            <Route path='/cliford' element={<ToyCategory image={clifordbigredtoy} category='cliford big red dog' />} />
            <Route path='/captainamerica' element={<ToyCategory image={captainamerica} category='captain america' />} />
            <Route path="/product/:productId" element={<ToyProduct />} />
              <Route path='/cart' element={<Cart />}/>
          </Routes>
            <Footer />
        </BrowserRouter>

      </ToyContextProvider>




      </>
  );
}

export default App;
