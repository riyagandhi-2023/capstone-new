/* eslint-disable no-unused-vars */
import React from "react"
import { useState, useEffect } from "react";
import { redirect, useNavigate, useParams } from "react-router-dom";
import MyImage from "./MyImage";
import { FaTruckArrowRight } from 'react-icons/fa6'
import { Link} from "react-router-dom";
import {BiArrowBack} from 'react-icons/bi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import {MdSecurity} from 'react-icons/md'
import {TbReplaceFilled} from 'react-icons/tb'

const API = 'https://api.pujakaitem.com/api/products'
const ProductsDetails = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const { name, company, price, description, stars, reviews, image } = product;


//fetching single api with id (product details page)
    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`${API}/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct(`${API}?id=${id}`);
    }, [id]);

// adding item to the cart
    const handleCart = (product,redirect) => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const isProductExist = cart.find(item => item.id === product.id)
        if(isProductExist){
            const updatedCart = cart.map((item) => {
                if(item.id === product.id){
                    return{
                        ...item,
                        quantity: item.quantity + 1
                    }
                }
                return item
            })
            localStorage.setItem('cart', JSON.stringify(updatedCart))
        } else{
            localStorage.setItem('cart', JSON.stringify([...cart, {...product,quantity: 1}]))
        }
        alert('Product added to cart')
        if(redirect){
            navigate('/cart')
        } 
    }
    

    if (loading) {

        return (
            <>
                Loading...
            </>
        )
    }
    

    return (
        <>
        <div className="continue-shopping">
            < Link to="/products" ><BiArrowBack  className="back-icon"/></Link>
            </div>
            <div className="Container-details">
                
                <div className="grid grid-two-column">
                    {/* Product Images */}
                    <div className="product_images">
                        <MyImage imgs={image} />
                    </div>
                    <div >
                        {/* Product data */}
                        <div className="product-data">
                            <h2>{name}</h2>
                            <p>Stars: {stars} <FontAwesomeIcon icon={faStar} style={{color: "#ffd43b",}} /></p>
                            <p><span>{reviews}</span> reviews </p>
                            <p> Brand: {company}</p>
                            <p>{description}</p>
                            <div className="product-data-delivery">
                                <div className="product-delivery-data">
                                    <FaTruckArrowRight className="delivery-icon" />
                                    <p>Free Delivery</p>
                                </div>
                                <div className="product-delivery-data">
                                    <TbReplaceFilled className="delivery-icon" />
                                    <p>30 Days replacement</p>
                                </div>
                                <div className="product-delivery-data">
                                    <MdSecurity className="delivery-icon" />
                                    <p>1 year warranty</p>
                                </div>
                            </div>
                        
                            <div className="product-data-info">
                            
                            <span> Price: ${price}</span>
                            
                            <div className="btn-cart">
                           
                            <button onClick={() => handleCart(product,true)}>Buy it Now</button>
                            <button onClick={() => handleCart(product)}>Add To Cart</button>
                            </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </>
    )


}


export default ProductsDetails;