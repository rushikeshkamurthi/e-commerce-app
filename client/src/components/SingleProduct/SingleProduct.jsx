import "./SingleProduct.scss";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaCartPlus,
    FaPinterest,
} from "react-icons/fa"
import Prod1 from "../../assets/products/earbuds-prod-1.webp";
import RelatedProducts from "../SingleProduct/RelatedProducts/RelatedProducts";
const SingleProduct = () => {
    return <div className="single-product-main-content">
        <div className="layout">
            <div className="single-product-page">
                <div className="left">
                    <img src={Prod1} alt="product" />
                </div>
                <div className="right">
                    <span className="name">Product Name</span>
                    <span className="price">Price</span>
                    <span className="desc">product dec</span>
                    <div className="cart-buttons">
                        <div className="quantity-buttons">
                            <span>-</span>
                            <span>5</span>
                            <span>+</span>
                        </div>
                        <button className="add-to-cart-button">
                            <FaCartPlus />
                            Add To Cart</button>
                    </div>
                    <span className="divider" />
                    <div className="info-item">
                        <span className="text-bold">Category: 
                            <span>HeadPhones</span>
                        </span>
                        <span className="text-bold">Share: 
                            <span className="social-icons">
                            <FaFacebookF/>
                            <FaInstagram/>
                            <FaTwitter/>
                            <FaLinkedinIn/>
                            <FaPinterest/>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
            <RelatedProducts/>
        </div>
    </div>
};

export default SingleProduct;
