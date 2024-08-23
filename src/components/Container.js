import React from 'react'
import Headphone from './Headphone'
import Drone from './Drone'
import ProductList from './ProductList'
import FlashSale from './FlashSale'
import Countdown from './Countdown'
import Summary from './Summary'
import Content from './Content'

function Container() {
  return (
    <>
       <Headphone />
        <Drone />
        <ProductList  />
        <FlashSale />
        <Countdown />
        <Summary />
        <Content />

    </>
  )
}

export default Container