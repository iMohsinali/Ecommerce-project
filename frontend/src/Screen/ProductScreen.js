import React from 'react'
import { Link } from 'react-router-dom'
import Rating from '../components/Rating'



const ProductScreen = (props) => {
    console.log("this ",props)
    const product=product.find((x)=>x._id==='2')
  return (
    <div className='row top'>
        <Link to="/" > Back to the result</Link>
     <div className='col-2'>
         <img  className='large' src= {product.image}/>
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
  )
}

export default ProductScreen