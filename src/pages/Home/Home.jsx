import { createContext, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Offers from "../../components/Offers/Offers";
import Products from "../../components/Products/Products";

export const storage = createContext();

const Home = () => {
  const [posts, setPosts] = useState({
    all: [],
    filtered: [],
  });
  const fetchPosts = async () => {
    let data = await fetch("https://fakestoreapi.com/products");
    let res = await data.json();
    setPosts({ ...posts, all: [...res] });
  };
  const formSubmit = (data) => {
    const Filter = posts.all.filter((item) => {
      return item.title.match(new RegExp(data.search, "gi"));
    });
    setPosts({ ...posts, filtered: [...Filter] });
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <>
      <Header submit={formSubmit} setter={setPosts} />
      <storage.Provider value={{ ...posts }}>
        <Offers />
        <Products />
      </storage.Provider>
    </>
  );
};

export default Home;
