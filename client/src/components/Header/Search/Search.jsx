import "./Search.scss";
import { MdClose } from "react-icons/md";
import Product1 from "../../../assets/products/earbuds-prod-1.webp"
const Search = ({ setShowSearch }) => {
    return <div className="search-modal">
        <div className="form-field">
            <input type="text"
                autoFocus
                placeholder="Search for Product"
            />
            <MdClose onClick={() => setShowSearch(false)} />

        </div>

        <div className="search-result-content">
            <div className="search-result">
                <div className="search-result-item">
                    <div className="img-container">
                        <img src={Product1} alt="products" />
                    </div>
                    <div className="prod-detailes">
                        <span className="name">Product Name</span>
                        <span className="Desciption">Desciption</span>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default Search;
