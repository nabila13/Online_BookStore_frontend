import { assets } from "../../assets/assets";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div>
      <h1 className="h1">Learn More About Us</h1>
      <div className="container">
        <div className="about-left">
          <div className="left-left">
            <div className="left-up">
              <img src={assets.about1} alt="" />
            </div>
            <div className="left-down">
              <img src={assets.about2} alt="" />
            </div>
          </div>
          <div className="left-right">
            <div className="right-up">
              <img src={assets.about3} alt="" />
            </div>
            <div className="right-down">
              <img src={assets.about4} alt="" />
            </div>
          </div>
        </div>
        <div className="about-right">
          <p className="p1">
            We are one of a millions of opportunities trying to reach you,
            accompany you and comfort you in your leisure time, and let you be a
            listener of the voice of the greatest minds!
          </p>
          <p className="p2">
            You Will find books of various genres from all the literary periods,
            we are working on enhancing our service all over the world to meet
            your cravings for literature.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
