import {MdClose} from "react-icons/md"
import Product1 from "../../../assets/products/earbuds-prod-1.webp"
import "./CartItem.scss";
const CartItem = () => {
    return <div className="cart-products">
        <div className="card-product">
            <div className="img-container">
                <img src={Product1} alt="products" />
            </div>
            <div className="prod-detailes">
                <span className="name">Product Name</span>
                <MdClose/>
                <div className="quantity-buttons">
                            <span>-</span>
                            <span>5</span>
                            <span>+</span>
                        </div>
                        <div className="text">
                            <span>3</span>
                            <span>x</span>
                            <span className="highlight">&#8377;3456</span>
                        </div>
            </div>
        </div>
    </div>;
};

export default CartItem;
