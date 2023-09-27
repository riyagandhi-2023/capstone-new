/* eslint-disable no-unused-vars */
import React from 'react'
export default function Contact() {
    
    return (
        <>
        <div className="contact-h2">
                <h2 ><u> Contact Us </u></h2>
            </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2527999406!2d-74.14448771969894!3d40.697631233373556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1695286221239!5m2!1sen!2sus" 
        width="98%" height="400" style={{ border:0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            
            <div className="container-contact">
                <div className="contact-form">
                    <form 
                    action="https://formspree.io/f/mgejzlno"
                    method="POST" className="contact-inputs">
                        <input
                            type="text"
                            placeholder="username"
                            name="username"
                            required
                            autoComplete="off" />

                        <input
                            type="email"
                            placeholder="Email"
                            name="Email"
                            required
                            autoComplete="off"
                        // value=""
                        />

                        <textarea
                            placeholder="Enter your message"
                            name="Message"
                            cols="30"
                            rows="10"
                            required
                            autoComplete="off">
                        </textarea>

                        <input className='btn-submit'
                            type="submit"
                            value="submit" />

                    </form>
                </div>
            </div>

        </>
    );
}