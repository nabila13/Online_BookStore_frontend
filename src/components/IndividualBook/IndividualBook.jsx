import { useContext } from "react";
import "./IndividualBook.css";
import { StoreContext } from "../../Context/StoreContext";
import { assets } from "../../assets/assets";

const IndividualBook = ({ id, name, image, author, price }) => {
  const { addToCart, removeFromCart, cartItems, url } =
    useContext(StoreContext);

  return (
    <div className="book-item">
      <div className="book-item-img-container">
        <img
          className="book-item-image"
          src={url + "/images/" + image}
          alt=""
        />
        {!cartItems[id] ? (
          <img
            src={assets.add_icon_white}
            onClick={() => {
              {
                addToCart(id);
              }
            }}
            alt=""
            className="add"
          />
        ) : (
          <div className="book-item-counter">
            <img
              onClick={() => {
                removeFromCart(id);
              }}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => {
                addToCart(id);
              }}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="book-item-info">
        <div className="book-item-name-rating">
          <p>{name}</p>
          {/* <img src={assets.rating_starts} alt="" /> */}
        </div>
        <p className="book-item-desc">{author}</p>
        <p className="book-item-price">${price}</p>
      </div>
    </div>
  );
};

export default IndividualBook;
