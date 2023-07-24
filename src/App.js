import Header from "./Header";
import Product from "./Product";
import ShoppingCart from "./ShoppingCart";
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
}from "react-router-dom";
import commerce from "./lib/commerce";
import { useState } from "react";
import Checkout from "./Checkout";
import Thankyou from "./Thankyou";



function App() {
    const [productsList,setProductsList]= useState([]);
    const [productsListByCategory,setProductsListByCategory]= useState([]);
    const [categoryList,setCategoryList]= useState([]);
    const [cart,setCart]=useState([]);
    const [orderDetails,setOrderDetails]=useState({});

    const fetchProducts = async()=>{
    const response = await commerce.products.list();
    setProductsList(response.data);
  }

   const fetchProductsByCategory = async(category)=>{
    const response = await commerce.products.list({
      category_slug:[category]
    });
    setProductsListByCategory(response.data);
  }

  const addToCart = async(prodId,qty)=>{
      const response=await commerce.cart.add(prodId,qty);
     setCart(response.cart);
  }

  const fetchCart=async()=>{
    setCart(await commerce.cart.retrieve())
  }
  
  const removeFromCart=async(prodId)=>{
    const response = await commerce.cart.remove(prodId);
    setCart(response.cart);
  }

  const fetchCategories=async()=>{
    const response= await commerce.categories.list();
    setCategoryList(response.data);
  }

  const setOrder=(order)=>{
    setOrderDetails(order);
  }
  useEffect(()=>{
    fetchProducts();
    fetchCart();
    fetchCategories();
  }, [])

  return (

    <Router>
       <div className="App">
         <Header  cart={cart}  categoryList={ categoryList}/>  
          <Switch>

            <Route exact path="/">
               <div className="banner">
                 <img src="https://static.vecteezy.com/system/resources/previews/003/599/325/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg" alt="banimg"/>
               </div>
               <Product productsList={productsList} addToCart={addToCart} />
            </Route>

            <Route exact path="/cart">
              <ShoppingCart cart={cart} removeFromCart={removeFromCart}/>
             </Route>

             <Route exact path="/category/:slug">
              <div style={{marginBottom:"410px"}}></div>
             <Product productsList={productsListByCategory} fetchProductsByCategory={fetchProductsByCategory} addToCart={addToCart} />
             </Route>

             <Route exact path="/checkout">
                 <Checkout cart={cart} setOrder={setOrder}/>
             </Route>

             <Route exact path="/thankyou">
                 <Thankyou orderDetails={orderDetails}/>
             </Route>


          </Switch>    
      </div>
    </Router>

  );
}

export default App;
