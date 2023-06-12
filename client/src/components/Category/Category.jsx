
import "./Category.scss";
import Products from "../../components/Products/Products"
const Category = () => {
    return <div className="category-main-content">
        <div className="layout">
            <div className="cetegory-title">
                Category Titile
            </div>
            <Products innerPage={true}/>
        </div>
    </div>;
};

export default Category;
