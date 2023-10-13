import React from 'react'
import Basket from '../components/shoppingBasket/basket'
import Cart from '../components/shoppingBasket/cart'
import ProgressBar from '../components/shoppingBasket/progressBar'

const ShoppingCart = () => {
  return (
    <>
    <ProgressBar/>
    <Basket/>
    <Cart/>
    </>
  )
}

export default ShoppingCart