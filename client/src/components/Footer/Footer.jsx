import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa"
import Payment from "../../assets/payments.png"
const Footer = () => {
    return <footer className="footer">
        <div className="footer-contact">
            <div className="col">
                <div className="title">About</div>
                <div className="text">
                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </div>
            </div>
            <div className="col">
            <div className="title">Contact</div>
            <div className="c-item">
                <FaLocationArrow/>
            <div className="text">
            2811 Mechanics Avenue, Savannah GA 31404
            </div>
            </div>
            <div className="c-item">
                <FaMobileAlt/>
            <div className="text">
            Phone: +91 798 987 567 
            </div>
            </div>
            <div className="c-item">
                <FaEnvelope/>
            <div className="text">
            Email : RdevStore@gmail.com
            </div>
            </div>
            </div>
            <div className="col"><div className="title">Categories</div>
            <span className="text">HeadPhones</span>
            <span className="text">SmartWatched</span>
            <span className="text">Bluetooth Speaker</span>
            <span className="text">Wireless Earbuds</span>
            <span className="text">Home Theaters</span>
            <span className="text">Projectors</span>
            <span className="text">Tabs</span>
            </div>
            <div className="col"><div className="title">Pages</div>
            <span className="text">Home</span>
            <span className="text">About</span>
            <span className="text">Privacy Policy</span>
            <span className="text">Returns</span>
            <span className="text">Tearms and Conditions</span>
            <span className="text">Conact Us</span>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">5244 West Port Au Prince Lane, Glendale AZ 85306</div>
                <img src={Payment} alt="payement" />
            </div>
        </div>
    </footer>;
};

export default Footer;
