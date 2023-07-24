import React from 'react'
import "./css/checkout.css"

function Thankyou({orderDetails}) {
  return (
    <div className="order_confirm">
        <h1>Hello {orderDetails?.customer?.firstname}  {orderDetails?.customer?.lastname}</h1>
        <h2>Thankyou for your order</h2>
        <h3>Order Number is :  {orderDetails?.id}</h3>
        <h4>Order Total :{orderDetails?.order.subtotal.formatted_with_symbol}</h4>
        <button>Continue Shopping</button>
      
    </div>
  )
}

export default Thankyou
