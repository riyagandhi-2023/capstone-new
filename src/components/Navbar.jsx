/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom'

import {BsFillBagFill} from 'react-icons/bs'
import { AiFillHome } from "react-icons/ai";
import { RiContactsLine } from "react-icons/ri";


//navigation bar 
function Navbar() {

 

  return (
    <>
      <nav>
    
        <div className='navbar-list' >

          <Link to='/' className="home-nav" > Home  <AiFillHome  className='home-icon'/> </Link>

          <Link to='/products' className="products-nav" > Products <BsFillBagFill  className='product-icon'/></Link>

          <Link to='/contact' className="contact-nav" > Contact <RiContactsLine className='contact-icon'/></Link>

          

        </div>

      </nav>
    </>
  )
}


export default Navbar