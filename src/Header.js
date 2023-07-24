import React from 'react'
import "./css/header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

function Header({cart, categoryList}) {
  return (
    <>
    <div className="header">

        <Link to="/">
         <img src="https://press.aboutamazon.in/sites/g/files/knoqqb51441/themes/site/nir_pid3610/dist/images/amazon-logo-orgsmile.svg" className="header_logo" alt="amc"/>
         </Link>

        <div className="header_search">
             <input type="text" />
             <SearchIcon className="header_searchIcon"/>
        </div>

        <div className="header_nav">
               <div className="header_option">
                    <span className="header_option1">Chandra Uday</span>
                    <span className="header_option2">Sign In</span>
               </div>

               <div className="header_option">
                    <span className="header_option1">Returns</span>
                    <span className="header_option2">& orders</span>
               </div>

               <div className="header_option">
                    <span className="header_option1">your</span>
                    <span className="header_option2">Prime</span>
               </div>

               <div className="header_optionBasket">
                <Link to="/cart">
                <ShoppingCartIcon/>
                <span>{cart?.total_items}</span>
                
                </Link>
               </div>   
        </div> 
    </div>

    <div className="header_bottom">
          <ul>
              {
               categoryList?.map(category=>{
                    return <li key={category.id}>
                         <Link to={"/category/${category.slug}"}>
                         {category.name}
                         </Link>
                         </li>
               })
              }
            
          </ul>
    </div>
    </>
  )
}

export default Header
