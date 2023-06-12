import "./Banner.scss";

import BannerImg from "../../../assets/banner-img.png"
const Banner = () => {
    return <div className="hero-banner">
        <div className="content">
        <div className="text-content">
            <h1>SALES</h1>
            <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable 
            </p>
            <div className="ctas">
                <div className="banner-cta">Read More </div>
                <div className="banner-cta v2">Shop More</div>
            </div>
        </div>
        <img className="banner-img" src={BannerImg} alt="Promo" />
        </div>
    </div>;
};

export default Banner;
