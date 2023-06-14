
import { useContext, useEffect } from "react";
import Products from "../Products/Products";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import "./Home.scss";
import { fetchDataFromAPI } from "../../utils/api"
import { Context } from "../../utils/Context"
const Home = () => {
    useEffect(() => {
        getCategories();
        getProducts();
    }, [])
    const { categories, setCategories, products,setProducts } = useContext(Context);

    const getCategories = async () => {
        const res = await fetchDataFromAPI("/api/categories?populate=*");
        setCategories(res.data);
    } 
    const getProducts = async () => {
        const res = await fetchDataFromAPI("/api/products?populate=*");
        setProducts(res.data);
    }
    return <div>
        <Banner />
        <div className="main-content">
            <div className="layout">
                <Category categories={categories} />
                <Products headingText="Popular Products" products={products} />
            </div>
        </div>
    </div>;
};

export default Home;
