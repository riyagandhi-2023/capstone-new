/* eslint-disable no-unused-vars */
import React from "react";
import { FaDiscord } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <>
        <section className="contact-box">
        <div className="container">
                <div className="footer-about">
                    <h3>JIO STORE</h3>
                </div>
                <div className="footer-social">
                <h3>Follow Us On</h3>
            </div>
            <div>
            <FaDiscord className="icons" />
              </div>
              <div>
                <FaInstagram className="icons" />
              </div>
              <div>
                <FaFacebook className="icons" />
              </div>
              <div>
                <Link to='https://github.com/riyagandhi-2023'><FaGithub className="icons" /></Link>
              </div>
              <div>
            </div>
            </div>

        </section>

        <footer>
            
            <div className="footer-bottom-section">
        
          <div className="content-footer">
            <p>
              @{new Date().getFullYear()} JIO STORE. Tech Space. 
              <br />All Rights Reserved
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
        </>
    )
}
export default Footer;