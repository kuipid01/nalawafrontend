/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import NewArrivals from './NewArrivals'
import ProductsByCat from './ProductsByCat'

import Categories from '../Pages/Categories'
import ProductPage from '../Pages/ProductPage'
import MainLoader from './MainLoader'
import TrendyProducts from './TrendyProducts'
import FillerSec from '../components/FillerSec'
import Delivery from './Delivery'
const Home = () => {


  return (
    <div className=''>
        {/* <Navbar/> */}
        <Hero/>
        <FillerSec/>
        <Delivery/>
        <NewArrivals/> 
        {/* <TrendyProducts/>  */}
        {/* <Categories/>  */}
         {/* <ProductsByCat/> */}
        {/* <ProductPage/> */}
    </div>
  )
}

export default Home