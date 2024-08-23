import React from 'react';
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Container from './components/Container';
import Headphone from './components/Headphone';
import Drone from './components/Drone';
import ProductList from './components/ProductList'
import FlashSale from './components/FlashSale'
import Countdown from './components/Countdown';
import Summary from './components/Summary';
import Content from './components/Content';
// import Basic from './components/Basic';


function App() {
  return (
    <>
   
  <BrowserRouter> 
     <Routes>
      <Route path="/" element={<Home />} />
       {/* <Route path="/headphone" element={<Headphone />} />
      <Route path="/drone" element={<Drone />} />
      <Route path="/productlist" element={<ProductList />} />
      <Route path="/flashsale" element={<FlashSale />} />
      <Route path="/countdown" element={<Countdown />} />
      <Route path="/summary" element={<Summary />} />
      <Route path="/content" element={<Content />} />  */}

      </Routes>  
     </BrowserRouter> 
{/* 
       <Home /> */}
       {/* <Headphone />
       <Drone/>
       <ProductList />
      <FlashSale />
       <Countdown />
       <Summary /> */}
       {/* <Content />   */}

     {/* <Basic /> */}
    </>
  );
}

export default App;
