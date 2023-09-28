// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    //geting all data from api
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch('https://api.pujakaitem.com/api/products');
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
            }

            return () => {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                componentMounted = false;
            }
     
        }

        getProducts();
    }, []);

    //loading 
    const Loading = () => {
        return (
            <>
                Laoding ...
            </>
        )
    }

    // sorting by category

    const filterProduct = (category) => {
        const updateList = data.filter((item) =>
            item.category.toLowerCase() === category.toLowerCase()
        );
        setFilter(updateList);
        console.log(updateList);
    };

    const ShowProducts = () => {

        return (
            <>
            {/* buttons for category */}
                <div className="buttons-products w3-bar w3-black">
                    <button className="btn-products w3-bar-item w3-button" onClick={() => setFilter(data)}>All</button>
                    <button className="btn-products w3-bar-item w3-button" onClick={() => filterProduct("mobile")}>Mobile</button>
                    <button className="btn-products w3-bar-item w3-button" onClick={() => filterProduct("laptop")}>Laptop</button>
                    <button className="btn-products w3-bar-item w3-button" onClick={() => filterProduct("computer")}>Computer</button>
                    <button className="btn-products w3-bar-item w3-button" onClick={() => filterProduct("watch")}>Watch</button>
                    <button className="btn-products w3-bar-item w3-button" onClick={() => filterProduct("accessories")}>Accessories</button>
                </div>
                <div className="product-container">
                    {filter.map(product => {
                        return (
                            <>
                            <div key={product.id}>
                                <div className="product-content" >
                                    <div className="product-card" >
                                        <Link to={`/product/${product.id}`}>
                                            <img src={product.image} className="product-img" alt={product.name} />
                                        </Link>
                                        <div className="card-content">
                                            <h5 className="card-title" >{product.name.substring(0, 12)}</h5>
                                            <p className="card-price" >${product.price}</p>
                                            <Link to={`/product/${product.id}`}><button className="product-button">See Details</button></Link>
                                        </div>
                                    </div>
                                </div>
                                </div>

                            </>
                        )
                    })}
                </div>
            </>

        )
    }
    return (

        <div>
            <div className="loading">
                {loading ? <Loading /> : <ShowProducts />}
            </div>
        </div>

    )
}




export default Products;
