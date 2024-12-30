// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { LiaShippingFastSolid } from 'react-icons/lia';
import banner from '../images/banner.jpg';
import iphone15 from '../images/iphone 15.jpg';
import earbuds from '../images/earbuds.png';
import samsung from '../images/samsung.jpg';
import mobile from '../images/iphone.jpeg';
import desktop from '../images/desktop.jpeg';
import watch from '../images/watch.jpeg';


const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [banner, iphone15, earbuds, samsung];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, []);

    // Filter category for images at bottom
    
    // eslint-disable-next-line no-unused-vars
    const [filter, setFilter] = useState('');
    const handleFilter = (category) => {
        setFilter(category);
        console.log(category);
    };

    return (
        <>
            <section className="slider-section">
                <div className="slider">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            className={`slide ${index === currentIndex ? 'active' : ''}`}
                            alt={`Slide ${index + 1}`}
                        />
                    ))}
                </div>
            </section>
            <section className="shipping-section">
                <div className="services">
                    <LiaShippingFastSolid className="icon-ship" />
                    <p className="shipping-text">Free Shipping From all orders over $500</p>
                </div>
            </section>
            <section className="banner-section">
                <div className="main-banner">
                    <img
                        className="banner-img"
                        src={mobile}
                        alt="main banner"
                        onClick={() => handleFilter('mobile')}
                    />
                    <img
                        className="banner-img"
                        src={desktop}
                        alt="main banner"
                        onClick={() => handleFilter('computer')}
                    />
                    <img
                        className="banner-img"
                        src={watch}
                        alt="main banner"
                        onClick={() => handleFilter('watch')}
                    />
                </div>
            </section>
        </>
    );
};

export default Home;
