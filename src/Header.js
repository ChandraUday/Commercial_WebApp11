import React from 'react'
import "./css/header.css"


function Header() {
  return (
    <div className="header">
        <img src="https://press.aboutamazon.in/sites/g/files/knoqqb51441/themes/site/nir_pid3610/dist/images/amazon-logo-orgsmile.svg" className="header_logo" alt="amc"/>

        <div className="header_search">
             <input type="text" />
            
        </div>
    </div>
  )
}

export default Header