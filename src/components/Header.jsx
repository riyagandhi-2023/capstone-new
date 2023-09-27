/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Navbar from './Navbar';
import { BsSearch } from "react-icons/bs";
import { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import {IoLogOutOutline} from "react-icons/io5"
import { IoMdContact } from "react-icons/io";
import { BsFillCartFill } from "react-icons/bs";




export default function Header() {

   
    const [input, setInput] = useState("");
    const [results, setResults] = useState([]);
    const { isAuthenticated, logout, loginWithRedirect, user } = useAuth0();

   

    const fetchData = (value) => {
        if (value.trim() === "") {
            setResults([]);
            return;
        }
        fetch("https://api.pujakaitem.com/api/products")
            .then((response) => response.json())
            .then((json) => {
                const results = json.filter((product) => {
                    const productName = product.name && product.name.toLowerCase();
                    const company = product.company && product.company.toLowerCase();
                    const category = product.category && product.category.toLowerCase();
                    return (
                        (productName && productName.includes(value)) ||
                        (company && company.includes(value)) ||
                        (category && category.includes(value))
                    )
                });
                setResults(results);
            }
            )
    }
    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    }


    return (
        <>

            <header>
                <div id="MainHeader">
                    <NavLink to='/'>
                        <img src="src/images/logo.png" alt="logo" className="logo" />
                    </NavLink>

                    <div className="column-search">
                        <div className="input-search">
                            <input
                                type="text"
                                className="searchbar"
                                value={input}
                                onChange={(e) => handleChange(e.target.value)}
                                placeholder="Search"
                                aria-describedby="basic-addon2" />
                        </div>
                        <div className="input-search-icon">
                            <BsSearch />
                        </div>

                    </div>

            
                    <div className='username'> 

                    {isAuthenticated && <p> {user.name} </p>}
                    
                    </div> 
                        <div className="btn-in-out">
                        {isAuthenticated ? (
                            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                Log Out <IoLogOutOutline />
                            </button>
                        ) : (
                            <button onClick={() => loginWithRedirect()} className='navbar-link login' > Login <IoMdContact /> </button>
                        )
                        }
                        </div>
                        <div className="cart-icon">
                        <NavLink to='/cart' className="navbar-link cart-link" ><BsFillCartFill /> </NavLink>
                        <span className='cart-total-item'> </span>
                        </div>
                        
                </div>
                
            </header>

            <Navbar />
    

            {results.length > 0 && (
                <div >
                    <div className="search-results">
                        {results.map((product) => (
                            <div key={product.id} className="search-results-box">
                                <img src={product.image} />
                                <div className="search-results-text">
                                    <p>Name: {product.name}, </p>
                                    <p> ${product.price} </p>
                                    <p>Company:{product.company}</p>
                                    <button><NavLink to={`/product/${product.id}`}>More info</NavLink></button>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>


    )
}