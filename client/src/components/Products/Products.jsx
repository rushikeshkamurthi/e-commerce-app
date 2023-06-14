import Product from "./Product/Product";
import "./Products.scss";
const Products = ({headingText,products}) => {
    return <div className="products-container">
        {headingText && <div className="sec-heading">{headingText}</div>}
            <div className="products">
            {products.map((item) => <Product key={item.id} id={item.id} item = {item}/>)}
            </div>
    </div>;
};

export default Products;
