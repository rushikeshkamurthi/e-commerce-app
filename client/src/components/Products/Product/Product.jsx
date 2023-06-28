import "./Product.scss";
import earbudsBudsProd1 from "../../../assets/products/earbuds-prod-1.webp"
const Product = () => {
    return <div className="product-card">
        <div className="thumbnail">
            <img src={earbudsBudsProd1} alt="product"></img>
        </div>
        <div className="prod-details">
            <span className="name">Product name</span>
            <span className="price"> &#8377; 499</span>
        </div>
    </div>;
};

export default Product;
