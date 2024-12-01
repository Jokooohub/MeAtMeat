import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo1} alt="" />
                <p> MeAtMeat is your go-to online meat shop, offering a wide selection of high-quality, fresh meats delivered straight to your door. Whether you're looking for premium cuts of beef, succulent chicken, tender pork, or exotic options like lamb and duck, we ensure top-notch quality at affordable prices. With a focus on convenience and customer satisfaction, MeAtMeat makes it easy to stock up on your favorite meats and enjoy delicious, home-cooked meals with just a few clicks.</p>
                <div className="footer-social-icons">
                    <a href="https://www.facebook.com/profile.php?id=100069828673170" target="_blank" rel="noopener noreferrer"><img src={assets.facebook_icon} alt="" /></a>
                    <a href="https://x.com/jokosaco_" target="_blank" rel="noopener noreferrer"><img src={assets.twitter_icon} alt="" /></a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><img src={assets.linkedin_icon} alt="" /></a>
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li><a href="tel:+639774071618">+6397-7407-1618</a></li>
                    <li><a href="mailto:joko.saco@carsu.edu.ph">joko.saco@carsu.edu.ph</a></li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024</p>
    </div>
  )
}

export default Footer