import React from 'react'
import { Routes, Route} from "react-router-dom";
import Itemlist from '../pages/itemlist';
import ShoppingCart from '../pages/shoppingCart';
import Layout from './layout';

const AppRoutes = () => {
  return (
   <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<Itemlist/>}/>
            <Route path='cart' element={<ShoppingCart/>}/>
        </Route>
   </Routes>
  )
}

export default AppRoutes