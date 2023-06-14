
import "./Category.scss";
import Products from "../../components/Products/Products"
import { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../../utils/Context";
import { fetchDataFromAPI } from "../../utils/api";
import { useParams } from "react-router-dom";
import { useState } from "react";
const Category = () => {
    const {id} = useParams();
    useEffect(() => {
        getProducts();
    }, [])
    const {  products,setProducts } = useContext(Context);
    const [title, seTitle] = useState("");
    const getProducts = async () => {
        const res = await fetchDataFromAPI(`/api/products?populate=*&[filters][categories][id]=${id}`);
        setProducts(res.data);
        seTitle(res?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title);
    } 

    return <div className="category-main-content">
        <div className="layout">
            <div className="cetegory-title">
            {title}
            </div>
            <Products  products={products}/>
        </div>
    </div>;
};

export default Category;
