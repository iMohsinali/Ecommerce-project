import React from 'react'
import data from '../data'
import Product from '../components/Product'
const HomeScreem = () => {
  return (
    <div className=" row center">
         
    {
      data.product.map((product)=>(
    <Product product={product}/>
        
      ))              
    }
   
  </div>
  )
}

export default HomeScreem