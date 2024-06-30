import { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import AboutUs from "../../components/AboutUs/AboutUs";
import ExploreGenre from "../../components/ExploreGenre/ExploreGenre";
import BookDisplay from "../../components/BookDisplay/BookDisplay";
const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <AboutUs />
      <ExploreGenre category={category} setCategory={setCategory} />
      <BookDisplay category={category} />
    </div>
  );
};

export default Home;
