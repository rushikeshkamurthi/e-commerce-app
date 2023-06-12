import "./Newsletter.scss";
 import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn
 } from "react-icons/fa"

const Newsletter = () => {
    return <div className="newsletter-section">
    <div className="newsletter-content">
    <span className="small-text">
        Newsletter
    </span>
    <span className="big-text">Sign up for the upadtes and offers</span>
    <div className="form">
        <input type="text" name="email" id="email" placeholder="Email address" />
        <button>Subscribe</button>
    </div>
    <div className="text"> Will be used in accordance with our Policy</div>
    <dic className="social-icons">
    <div className="icon">
            <FaFacebookF size={14}/>
        </div>
        <div className="icon" size={14}>
            <FaInstagram/>
        </div>
        <div className="icon" size={14}>
            <FaTwitter/>
        </div>
        <div className="icon" size={14}>
            <FaLinkedinIn/>
        </div>
    </dic>
    </div>
    </div>;
};

export default Newsletter;
