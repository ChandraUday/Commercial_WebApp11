import React from 'react'
import "./css/cart.css"
import { useHistory } from 'react-router-dom'


function ShoppingCart({cart,removeFromCart}) {
  const history=useHistory()
  return (
    
    <div className='checkout'>
           <div className="checkout_left">
             <img src="https://thepaypers.com/Images/SocialMedia2022/cards-issuing-payments.jpg" className="checkout_ad"/>
              
              <div>
                <h3>Chandra Uday</h3>
                <h2 className="checkout_title">Your shopping Basket </h2>

{
  cart?.line_items?.map(item=>{

    return  <div className="checkoutProduct" key={item.id} >
    <img src={item?.media?.source} className="checkoutProduct_img"/>
    <div className="checkoutProduct_info">
       
        <p className="checkoutProduct_title">{item.name}</p>
        <p className="checkoutProduct_price">
        <strong>{item.price.formatted_with_symbol}*{item.quantity}= {cart.currency.symbol} {item.price.raw*item.quantity}</strong>
        </p>
        <button onClick={()=>removeFromCart(item.id)}>Remove from Basket</button>
    </div>
  </div>

  })
}

               
              </div>


            </div>


          <div className="checkout_right">
             <div className="subtotal">
                 <p>Subtotal({cart?.total_items}items): <strong>{cart?.subtotal?.formatted_with_symbol}</strong></p>
                 <small className="subtotal_gift">
                        <input type="checkbox"/>This order contains gift
                 </small>
             </div>

             <button onClick={()=>history.push("/checkout")}>Proceed to checkout</button>
          </div>
          
    </div>
  
    
  )
}

export default ShoppingCart
