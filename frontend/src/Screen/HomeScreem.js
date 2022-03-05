import React, { useEffect } from 'react'
import Loading from '../components/Loading'
import MessageBox from '../components/MessageBox'
import Product from '../components/Product'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../Action/ProductAction'
const HomeScreem = () => {
  const dispatch=useDispatch()
  // const [product, setproduct] = useState([]);
  // const [loading, setloading] = useState(false);
  // const [error, seterror] = useState(false);
  const productList=useSelector((state)=>state.productList)
  const {loading,error,product}=productList
  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch]);
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