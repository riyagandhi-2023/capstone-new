/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaTrashAlt } from 'react-icons/fa'
import { BiArrowBack } from 'react-icons/bi'
import minus from '../images/minus.png'
import add from '../images/add.png'



const Cart = () => {

    const navigate = useNavigate();
    const [total, setTotal] = useState(0);

    const carts = JSON.parse(localStorage.getItem('cart')) || [];

    // Total amount
    useEffect(() => {
        const total = carts.reduce((acc, item) => {
            return acc + (item.price * item.quantity)
        }, 0)
        setTotal(total)
    }, [carts])

    // add item
    const handleInc = (id) => {
        const updatedCart = carts.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            return item
        })
        localStorage.setItem('cart', JSON.stringify(updatedCart))
        navigate('/cart')
    }

    // subtract item
    const handleDec = (id) => {
        const updatedCart = carts.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    quantity: item.quantity - 1

                }
            }
            return item
        })
        localStorage.setItem('cart', JSON.stringify(updatedCart))
        navigate('/cart')
    }

    //delete item
    const removeProduct = (id) => {
        const updatedCart = carts.filter(item => item.id !== id)
        localStorage.setItem('cart', JSON.stringify(updatedCart))
        navigate('/cart')
    }

    //if cart is empty should bring to empty page
    if (!carts.length) {
        return <div className="empty">
            <div className="empty-cart">
                <img src="https://assets.materialup.com/uploads/16e7d0ed-140b-4f86-9b7e-d9d1c04edb2b/preview.png" />
            </div>
            <div className="empty-cart-content">

                <p> Your Cart is Empty</p>
                <p>Add something to make me happy </p>
                < Link to="/products" ><button className="empty-btn">Continue Shopping</button></Link>
            </div>
        </div>

    }

    return (
        <>

            <div className="cart">
                <div className="cart-container">
                    <div className="cart-content">
                        <div className="shopping-cart">
                            <h1 className="shopping-cart-h">Shopping Cart</h1>
                            <h2 className="shopping-cart-h">{carts.length} Items</h2>
                        </div>
                        <hr />
                        <div className="cart-product">
                            <h3 className="cart-detail-h3">Product Details</h3>
                            <h3 className="cart-detail-heading">Quantity</h3>
                            <h3 className="cart-detail-heading">Price</h3>
                            <h3 className="cart-detail-heading">Total</h3>
                            <h3 className="cart-detail-heading"></h3>
                        </div>
                        {
                            carts.map((cart) => {
                                return (
                                    <>
                                        <div className="cart-img-container">
                                            <div className="cart-img-product">
                                                <div >
                                                    <img className="cart-image" src={cart.image[0].url} alt={cart.name} />
                                                </div>
                                                <div className="cart-detail-content">
                                                    <span className="product-name-span">{cart.name}</span>
                                                    <span className="product-brand-span">{cart.company}</span>
                                                    <span className="product-brand-span">{cart.category}</span>

                                                </div>
                                            </div>
                                            <div className="cart-input-container">
                                                <img src= {minus} className="image-icon-cart" onClick={() => handleDec(cart.id)} />
                                                <input className="cart-input" type="text" value={cart.quantity} readOnly />
                                                <img src={add} className="image-icon-cart" onClick={() => handleInc(cart.id)} />

                                            </div>
                                            <span className="input-span">$ {cart.price}</span>
                                            <span className="input-span">$ {cart.price * cart.quantity}</span>
                                            <span className="input-span"> <FaTrashAlt className="remove" onClick={() => removeProduct(cart.id)} /></span>
                                        </div>
                                    </>
                                )
                            }
                            )
                        }

                        < Link to="/products" className="continue-shopping-link"><BiArrowBack className="back-icon" />Continue Shopping</Link>
                    </div>
                    <div className="summary-container">
                        <div id="summary" className="summary-cart" >

                            <h1 className="cart-h1">Order Summary</h1>
                            <hr className="hr-summary" />
                            <div className="cart-item">
                                <span className="item-cart-span">Items {carts.length}</span>
                                <span className="item-cart-price">${total.toFixed(2)}</span>
                            </div>
                        </div>
                        <div>
                            <label className="shipping">Shipping</label>
                            <select className="select-opt">
                                <option>Standard shipping - $10.00</option>
                            </select>
                        </div>
                        <div className="promo-code">
                            <label htmlFor="promo" className="promo-code-label">Promo Code</label>
                            <input type="text" id="promo" placeholder="Enter your code" className="promo-text" />
                        </div>
                        <button className="apply vertical-align:middle" ><span>Apply</span></button>
                        <hr className="hr-apply" />
                        <div className="total-container">
                            <div className="total-content">
                                <span>Total Cost</span>
                                <span>${(total + 10).toFixed(2)} </span>
                            </div>
                            <button className="checkout-btn"> Checkout </button>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )

};
export default Cart;