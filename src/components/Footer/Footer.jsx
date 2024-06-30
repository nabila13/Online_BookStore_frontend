import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
            ducimus dicta esse dolorum eligendi optio? Id enim doloribus, eum
            accusantium consequatur voluptatum soluta laudantium quod beatae
            amet ea ducimus numquam perspiciatis dolorum facere eos porro quas
            illum ullam eveniet voluptate.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN tOUCH</h2>
          <ul>
            <li>+8801134128122</li>
            <li>Contact@bookworm.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        {" "}
        Copyright 2024 @ bookworm.com - All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
