import { useContext } from "react";
import "./BookDisplay.css";
import { StoreContext } from "../../Context/StoreContext";
import IndividualBook from "../IndividualBook/IndividualBook";
const BookDisplay = ({ category }) => {
  const { book_list } = useContext(StoreContext);
  return (
    <div>
      <div className="book-display" id="book-display">
        <h2>Most read books for you!</h2>
        <div className="book-display-list">
          {book_list.map((item, index) => {
            if (category === "All" || category == item.category) {
              return (
                <IndividualBook
                  key={index}
                  id={item._id}
                  name={item.name}
                  author={item.author}
                  price={item.price}
                  image={item.image}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default BookDisplay;
