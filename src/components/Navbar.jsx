/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom'

import {BsFillBagFill} from 'react-icons/bs'
import { AiFillHome } from "react-icons/ai";
import { RiContactsLine } from "react-icons/ri";
import {AiOutlineLogin} from "react-icons/ai"
import { RiAccountCircleLine } from 'react-icons/ri'


function Navbar() {

 

  return (
    <>
      <nav>
    
        <div className='navbar-list' >

          <Link to='/' className="home-nav" > Home <AiFillHome /> </Link>

          <Link to='/products' className="products-nav" > Products <BsFillBagFill /></Link>

          <Link to='/contact' className="contact-nav" > Contact <RiContactsLine className='icon-contact'/></Link>

          <Link to='/loginm' className="loginm-nav" > Login < AiOutlineLogin className='icon-loginm'/></Link>

          <Link to='/signup' className="signup-nav" > Sign Up < RiAccountCircleLine className='icon-signup'/></Link>

        </div>

      </nav>
    </>
  )
}


export default Navbar