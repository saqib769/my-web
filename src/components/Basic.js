// import React, { useState } from 'react'
// import Home from './Home'
// import Drone from './Drone'
// import FlashSale from './FlashSale'
// import Headphone from './Headphone'
// import ProductList from './ProductList'


// function Basic() {

//     const  [activeComponent, setActiveComponent] = useState("ProductList")

//   return (
//     <div>
//       <button onClick={() => setActiveComponent("Home")}></button>
//       <button onClick={() => setActiveComponent("Drone")}></button>
//       <button onClick={() => setActiveComponent("FlashSale")}></button>
//       <button onClick={() => setActiveComponent("Headphone")}></button>
//       <button onClick={() => setActiveComponent("ProductList")}></button>


//       {activeComponent === "Home" && <Home />}
//       {activeComponent === "Drone" && <Drone />}
//       {activeComponent === "FlashSale" && <FlashSale />}
//       {activeComponent === "Headphone" && <Headphone />}
//       {activeComponent === "ProductList" && <ProductList />}

//     </div>
//   )
// }

// export default Basic