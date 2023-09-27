/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";



const Cart = () => {

    const navigate = useNavigate();
    const [total, setTotal] = useState(0);

    const carts = JSON.parse(localStorage.getItem('cart')) || []; 

    useEffect(() => {
        const total = carts.reduce((acc, item) => {
            return acc + (item.price * item.quantity)
        },0)
        setTotal(total)
    },[carts])

    const handleInc = (id) => {
        const updatedCart = carts.map(item => {
            if(item.id === id){
                return{
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            return item
        })
        localStorage.setItem('cart', JSON.stringify(updatedCart))
        navigate('/cart')
    }

    const handleDec = (id) => {
        const updatedCart = carts.map(item => {
            if(item.id === id){
                return{
                    ...item,
                    quantity: item.quantity - 1
                    
                }
            }
            return item
        })
        localStorage.setItem('cart', JSON.stringify(updatedCart))
        navigate('/cart')
    }

    const removeProduct = (id) => {
        const updatedCart = carts.filter(item => item.id !== id)
        localStorage.setItem('cart', JSON.stringify(updatedCart))
        navigate('/cart')
    }

    if(!carts.length) {
    return <div className="empty-cart">Cart is empty</div>
    }

    return (
        <>
            <div className="container mx-auto">
                <div className="cart-container">
                    <div className="cart-content">
                        <div className="shopping-cart">
                            <h1 className="shopping-cart-h">Shopping</h1>
                            <h2 className="shopping-cart-h">{carts.length} Items</h2>
                        </div>
                        <div className="cart-product">
                            <h3 className="cart-detail-h3">Product Details</h3>
                            <h3 className="cart-detail-heading">Quantity</h3>
                            <h3 className="cart-detail-heading">Price</h3>
                            <h3 className="cart-detail-heading">Total</h3>
                        </div>
                        {
                            carts.map((cart)=>{
                                return (
                                    <>
                                    <div className="cart-img-container">
                            <div className="cart-img-product">
                                <div className="cart-img-2">
                                    <img className="cart-image" src={cart.image} alt={cart.name} />
                                </div>
                                <div className="cart-detail-content">
                                    <span className="product-name-span">{cart.name}</span>
                                    <span className="product-brand-span">{cart.company}</span>
                                    <span className="product-brand-span">{cart.category}</span>
                                    <div className="remove" onClick={() => removeProduct(cart.id)}>Remove</div>
                                </div>
                            </div>
                            <div className="cart-input-container">
                            <img src="/src/images/minus.png" className="image-icon-cart" onClick={() => handleDec(cart.id)}/>
                                <input className="cart-input" type="text" value={cart.quantity} />
                                <img src="/src/images/add.png" className="image-icon-cart" onClick={() => handleInc(cart.id)}/>

                            </div>
                            <span className="input-span">$ {cart.price}</span>
                            <span className="input-span">$ {cart.price * cart.quantity}</span>
                        </div>
                        </>
                                )
                            }
                            )
                        }
                        
                        <Link to="/products" className="continue-shopping-link">Continue Shopping</Link>
                    </div>
                    <div className="summary-cart">
                        <h1 className="cart-h1">Order Summary</h1>
                        <div className="cart-item">
                            <span className="item-cart-span">Item {carts.length}</span>
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
                    <button className="apply">Apply</button>
                    <div className="total-container">
                        <div className="total-content">
                            <span>Total Cost</span>
                            <span>${(total + 10).toFixed(2)} </span>
                        </div>
                        <button className="checkout-btn"> Checkout </button>
                    </div>

                </div>

            </div>


        </>
    )

};
export default Cart;