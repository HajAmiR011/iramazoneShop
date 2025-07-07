import { useState } from "react";
import Header from "../../components/Header/Header";
import ShowBlogs from "./ShowBlogs";
import { useQuery } from "@tanstack/react-query";

const Blogs = () => {
  const [blogs, setBlogs] = useState({
    all: [],
    filtered: [],
  });

  const { data } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      try {
        let data = await fetch(
          "https://hajamir011.github.io/iramazoneDev/db.json"
        );
        let res = await data.json();
        setBlogs({ ...blogs, all: [...res.blogs] });
        return res;
      } catch (error) {
        return error.message;
      }
    },
    retry: 2,
  });

  const formSubmit = (data) => {
    const Filter = blogs.all.filter((item) => {
      return item.name.match(new RegExp(data.search, "gi"));
    });
    setBlogs({ ...blogs, filtered: [...Filter] });
  };
  return (
    <>
      <Header setter={setBlogs} submit={formSubmit} />
      <ShowBlogs value={{ ...blogs }} />
    </>
  );
};

export default Blogs;
