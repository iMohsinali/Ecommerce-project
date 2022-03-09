import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { detailsproduct } from '../Action/ProductAction'
import Loading from '../components/Loading'
import MessageBox from '../components/MessageBox'
import Rating from '../components/Rating'



const ProductScreen = () => {
    const params=useParams()
    
    const productDetails=useSelector(state=>state.productDetails)
    const {loading,error,product}=productDetails
const dispatch=useDispatch()
const productid=params.id
    useEffect(() => {
                dispatch(  detailsproduct(productid))
    }, [dispatch,productid]);
  return (
<div>
       {
         loading?<Loading> </Loading>:
         error?<MessageBox variant='danger'>{error}</MessageBox>:
       (
         <div className='row top'>
         <Link to="/" > Back to the result</Link>
      <div className='col-2'>
          <img  className='large' src= {product.image} alt={product.name}/>
      </div>
      <div className='col-1'>
          <ul>
              <li>{product.name}</li>
              <li><Rating rating={product.rating} rewives={product.rewives}/> </li>
             <li>Price :${product.price}</li>
              <li>
                  Descrpition
                  <p>{product.descrpition}</p>
              </li>
          </ul>
      </div>
      <div className='col-1'>
          <div className='card card-body'>
            <ul>
                <li>
                    <div className='row'>
                        <div>Price</div>
                        <div className='price'>{product.price}</div>
                    </div>
                </li>
                <li>
                    <div className='row'>
                        <div>status</div>
                        <div className='status'>{product.countInstack >0?(<span className='suceess'>Stock In</span>):(<span className='danger'>Stouck Out</span>)}</div>
                    </div>
                </li>
                <li>
                    <button className='primary block'>Add to card</button>
                </li>
            </ul>
          </div>
      </div>
     </div>

        ) }
  
   
  </div>


   
  )
}

export default ProductScreen