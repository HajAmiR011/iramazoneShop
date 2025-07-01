import { createContext, useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Show from "./components/Show/Show";
import Products from "./components/Products/Products";
import Offers from "./components/Offers/Offers";

export const storage = createContext();

const App = () => {
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
      <Header submit={formSubmit} setter={setPosts}/>
      <Show />
      <storage.Provider value={{...posts}}>
        <Offers />
        <Products />
      </storage.Provider>
    </>
  );
};

export default App;
