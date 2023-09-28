/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
//importing link

import {LiaShippingFastSolid} from 'react-icons/lia'
import banner from '../images/banner.jpg'
import  iphone15 from '../images/iphone 15.jpg'
// import banner from '/src/images/banner.jpg'
// import banner from '/src/images/banner.jpg'
// import banner from '/src/images/banner.jpg'


const Home =() => {

    // filter category for images at bottom
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState('');
    const handleFilter = (category) => {
        
        setFilter(category);
        console.log(category)
      };

    return (
        <>
    
        <section>
        <div className='img-heros active'>

            <div>
        {/* slide show of images */}
        <img src={banner} className='img-hero'/>
        <img src={iphone15} className='img-hero'/>
        <img src='/src/images/earbuds.png' className='img-hero'/>
        <img src='/src/images/samsung_1.png' className='img-hero'/>
        <img src='/src/images/samsung.jpg' className='img-hero'/>
        
        </div>
        </div>
        </section>
                <section>
                    <div className='services'>
                        <LiaShippingFastSolid className='icon-ship'/> 
                    </div>
                    <p className='shipping-text'>Free Shipping From all orders over $500</p>
                </section>
                
                <section>

                <div className="Main-banner">
                 
                    <img className="banner-img" src="/src/images/iphone.jpeg" alt="main banner" onClick={( ) => handleFilter('mobile')}/>
                    <img className="banner-img" src="/src/images/desktop.jpeg" alt="main banner" onClick={() => handleFilter("computer")} />
                    <img className="banner-img" src="/src/images/watch.jpeg" alt="main banner" onClick={() => handleFilter("watch")}/>
       
    

                    
                </div>
                
            </section>
            

        </>
    );
}

export default Home;