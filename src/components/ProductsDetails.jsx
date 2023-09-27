/* eslint-disable no-unused-vars */
import React from "react"
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MyImage from "./MyImage";
import { FaTruckArrowRight } from 'react-icons/fa6'
import { NavLink } from "react-router-dom";


const API = 'https://api.pujakaitem.com/api/products'
const ProductsDetails = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const { name, company, price, description, stars, reviews, image } = product;



    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`${API}/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct(`${API}?id=${id}`);
    }, [id]);


    const handleCart = (product,redirect) => {
        console.log(product);
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
            <div className="Container-details">
                <div className="grid grid-two-column">
                    {/* Product Images */}
                    <div className="product_images">
                        <MyImage imgs={image} />
                    </div>
                    <div className="product-data">
                        {/* Product data */}
                        <div className="product-data">
                            <h2>{name}</h2>
                            <p>Stars: {stars}</p>
                            <p>{reviews} reviews </p>
                            <p>Price: ${price}</p>
                            <p>{description}</p>
                            <div className="product-data-warranty">
                                <div className="product-warranty-data">
                                    <FaTruckArrowRight className="warranty-icon" />
                                    <p>Free Delivery</p>
                                </div>
                            </div>
                            <div className="product-data-info">
                                <p> Brand: <span> {company}</span></p>
                            </div>
                            <hr />
                            <div className="btn-cart">
                            <button onClick={() => handleCart(product,true)}>Buy it Now</button>
                            <button onClick={() => handleCart(product)}>Add To Cart</button>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </>
    )


}


export default ProductsDetails;