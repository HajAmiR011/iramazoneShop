import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router";

const ShowBlogs = ({ value }) => {
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [email, setEmail] = useState("");

  const { mutate } = useMutation({
    mutationFn: async (id) => {
      try {
        const res = await fetch(
          `https://hajamir011.github.io/iramazoneDev/db.json/${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await res.json();
        return data.blogs;
      } catch (error) {
        return error.message;
      }
    },
  });

  useEffect(() => {
    setTimeout(() => {
      value.all.map((item) => {
        setName(item.name);
        setEmail(item.email);
        setBody(item.body);
      });
    }, 2000);
  });

  return (
    <div className="w-full max-w-[1200px] mx-auto p-3 xl:p-0 my-5">
      <h1 className="text-3xl font-bold text-white mb-5">Blogs</h1>
      <div className="flex flex-wrap justify-center items-start gap-5">
        {value.filtered.length > 0 &&
          value.filtered.map((item) => {
            return (
              <div
                key={item.id}
                className="w-[300px] flex flex-col gap-3 shadow-lg rounded-lg p-4 bg-white"
              >
                <h3 className="font-bold text-xl">{item.name}</h3>
                <h3 className="font-semibold text-md">{item.email}</h3>
                <p className="text-md text-justify">{item.body}</p>
                <div className="w-full flex items-center justify-evenly">
                  <Link
                    to={`/update/${item.id}`}
                    className="block capitalize bg-gray-300 px-6 py-2 text-black text-xl rounded-md shadow-md hover:bg-blue-500 hover:text-white transition-all duration-300"
                  >
                    Edit
                  </Link>
                  <Link
                    className="block capitalize bg-gray-300 px-3 py-2 text-black text-xl rounded-md shadow-md hover:bg-red-500 hover:text-white transition-all duration-300"
                    onClick={() => mutate(item.id)}
                  >
                    delete
                  </Link>
                </div>
              </div>
            );
          })}
        {value.all.length > 0 &&
          value.filtered.length == 0 &&
          value.all.map((item) => {
            return (
              <div
                key={item.id}
                className="w-[300px] flex flex-col gap-3 shadow-lg rounded-lg p-4 bg-white"
              >
                {name ? (
                  <h3 className="font-bold text-xl whitespace-nowrap overflow-hidden text-ellipsis text-center">
                    {item.name}
                  </h3>
                ) : null}
                {!name ? <Skeleton count={1} baseColor="#2b2b2b" /> : null}
                {email ? (
                  <h3 className="font-semibold text-md text-center">
                    {item.email}
                  </h3>
                ) : null}
                {!email ? <Skeleton count={1} baseColor="#2b2b2b" /> : null}
                {body ? (
                  <p className="text-md text-justify whitespace-nowrap overflow-hidden text-ellipsis">
                    {item.body}
                  </p>
                ) : null}
                {!body ? <Skeleton count={1} baseColor="#2b2b2b" /> : null}
                <div className="w-full flex items-center justify-evenly">
                  <Link
                    to={`/update/${item.id}`}
                    className="block capitalize bg-gray-300 px-6 py-1 text-black text-xl rounded-md shadow-md hover:bg-blue-500 hover:text-white transition-all duration-300"
                  >
                    Edit
                  </Link>
                  <Link
                    className="block capitalize bg-gray-300 px-3 py-1 text-black text-xl rounded-md shadow-md hover:bg-red-500 hover:text-white transition-all duration-300"
                    onClick={() => mutate(item.id)}
                  >
                    delete
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ShowBlogs;
