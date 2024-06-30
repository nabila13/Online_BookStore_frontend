import "./ExploreGenre.css";
import { book_list } from "../../assets/assets.js";
const ExploreGenre = ({ category, setCategory }) => {
  return (
    <div className="explore-genre" id="explore-genre">
      <h1>Explore Our Diverse Genres</h1>
      <p className="explore-genre-text">
        Choose from a diverse genre featuring a delectable array of books.our
        mission is to satisfy your demands and elevate your reading experience.
      </p>
      <div className="explore-genre-list">
        {book_list.map((item, index) => {
          return (
            <div
              onClick={() => {
                setCategory((prev) =>
                  prev === item.genre_name ? "All" : item.genre_name
                );
              }}
              key={index}
              className="explore-genre-list-item"
            >
              <img
                className={category === item.genre_name ? "active" : ""}
                src={item.genre_image}
                alt=""
              />
              <p>{item.genre_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreGenre;
