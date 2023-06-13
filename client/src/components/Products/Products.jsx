import Product from "./Product/Product";
import "./Products.scss";
const Products = ({headingText}) => {
    return <div className="products-container">
        {headingText && <div className="sec-heading">{headingText}</div>}
            <div className="products">
            <Product/><Product/><Product/><Product/><Product/><Product/><Product/><Product/>
            </div>
    </div>;
};

export default Products;
