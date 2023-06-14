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
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchDataFromAPI } from "../../utils/api";
const SingleProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    useEffect(() => {
        getProduct();
    }, [])
    const getProduct = async () => {
        const res = await fetchDataFromAPI(`/api/products?populate=*&[filters][id]=${id}`)
         setProduct(res);
    } 
    if(!product) return;
    const item = product.data[0].attributes;
    return <div className="single-product-main-content">
        <div className="layout">
            <div className="single-product-page">
                <div className="left">
                    <img src={process.env.REACT_APP_DEV_URL+item.img.data[0].attributes.url} alt="product" />
                </div>
                <div className="right">
                    <span className="name">{item.title}</span>
                    <span className="price">&#8377;{item.price}</span>
                    <span className="desc">{item.desc}</span>
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
            {/* <RelatedProducts/> */}
        </div>
    </div>
};

export default SingleProduct;
