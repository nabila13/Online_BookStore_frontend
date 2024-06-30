import { assets } from "../../assets/assets";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="right-left">
        <div className="header-contents left">
          <h2>Order your favorite Book here</h2>
          <p>
            Choose from diverse categories featuring a delectable array of books
            collected with the finest minds!
          </p>
          <button>View Genres!</button>
        </div>
        <div className="right">
          <img src={assets.girly} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
