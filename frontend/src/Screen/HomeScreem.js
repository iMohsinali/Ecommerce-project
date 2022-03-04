import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import MessageBox from '../components/MessageBox'
import axois from 'axios'
import Product from '../components/Product'
const HomeScreem = () => {
  const [product, setproduct] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);
  useEffect(() => {
    const fetchdata= async ()=>{
    try {
      setloading(true)
      const {data}= await axois.get('/api/product')
      setloading(false)
      setproduct(data)
    } catch (er) {
      seterror(er.message)
      setloading(false)
      
    }
    }
    fetchdata()
  }, []);
  return (
    <div>
       {
         loading?<Loading> </Loading>:
         error?<MessageBox variant='danger'>{error}</MessageBox>:
         <div className=" row center">
         
         {
           product.map((product)=>(
         <Product product={product}/>
             
           ))              
         }
        
       </div>
       }
  
   
  </div>
  )
}

export default HomeScreem