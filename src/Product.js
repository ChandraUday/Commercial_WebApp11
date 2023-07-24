import React, { useEffect } from 'react'
import "./css/product.css";
import { useParams } from 'react-router-dom';

function Product({productsList,addToCart,fetchProductsByCategory}) {
  let {slug} = useParams()
  console.log(slug)

  useEffect(()=>{
    if(slug) {fetchProductsByCategory(slug)}
  },[slug])


  return (
    <div className="products_wrap">
        {
          productsList.map((items)=>{
            return  <div className="product" key={items.id}>
            <img src={items?.media?.source} alt="" />
            <h3>{items.name}</h3>
            <p>{items.price.formatted_with_symbol}</p>
            <button onClick={()=>addToCart(items.id,1)}>Add to Cart</button>
        </div>
          })
        }
      
    </div>
  )
}
export default Product
