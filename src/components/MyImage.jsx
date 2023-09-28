/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';

//images forr products detail page

const MyImage = ({ imgs =[{url:""}]}) => {
    const [mainImage, setMainImage] = useState(imgs[0]);
    return (
        <>
            <div className='image-detail grid grid-four-column'>
                {
                    imgs.map((curlElm, index) => {
                        return (
                            <>
                                <figure>
                                    <img src={curlElm.url}
                                        alt={curlElm.filename}
                                        className='box-image-style'
                                        key={index}
                                        onClick={() => setMainImage(curlElm)}/>
                                </figure>
                            </>
                        )
                    }
                    )
                }

            </div>

            <div className='main-screen'>
                <img src={mainImage.url} alt={mainImage.filename} />
            </div>

        </>
    )
};


export default MyImage;