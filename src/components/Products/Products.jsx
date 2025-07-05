import { useContext, useState } from "react";
import { storage } from "../../pages/Home/Home";
import { IoIosEye } from "react-icons/io";
import Overlay from "../Overlay/Overlay";

const Products = () => {
  const [overlay, setOverlay] = useState({
    open: false,
    image: "",
    title: "",
    description: "",
    price: "",
    rate: "",
    count: "",
  });
  const { all } = useContext(storage);
  const { filtered } = useContext(storage);

  return (
    <>
      <div className="w-full max-w-[1200px] mx-auto p-3 xl:p-0 my-5">
        <h1 className="text-3xl font-bold text-white mb-5">Products</h1>
        <div className="flex flex-wrap justify-center items-center gap-5">
          {filtered.length > 0 &&
            filtered.map((item) => {
              return (
                <div
                  key={item.id}
                  className="w-[300px] flex flex-col gap-2 shadow-lg rounded-md p-3 bg-white"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[250px] object-contain"
                  />
                  <h3 className="whitespace-nowrap overflow-hidden text-ellipsis font-bold text-xl">
                    {item.title}
                  </h3>
                  <p className="text-md whitespace-nowrap overflow-hidden text-ellipsis">
                    {item.description}
                  </p>
                  <button
                    onClick={() => {
                      document.body.style.overflow = "hidden";
                      setOverlay({
                        open: true,
                        image: item.image,
                        title: item.title,
                        description: item.description,
                        price: item.price,
                        rate: item.rating.rate,
                        count: item.rating.count,
                      });
                    }}
                    className="capitalize flex items-center gap-2 justify-center bg-gray-300 p-1 text-black text-xl rounded-md shadow-md hover:bg-green-500 hover:text-white transition-all"
                  >
                    show more
                    <IoIosEye size={30} className="mt-1" />
                  </button>
                </div>
              );
            })}
          {all.length > 0 &&
            filtered.length == 0 &&
            all.map((item) => {
              return (
                <div
                  key={item.id}
                  className="w-[300px] flex flex-col gap-2 shadow-lg rounded-md p-3 bg-white"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[250px] object-contain"
                  />
                  <h3 className="whitespace-nowrap overflow-hidden text-ellipsis font-bold text-xl">
                    {item.title}
                  </h3>
                  <p className="text-md whitespace-nowrap overflow-hidden text-ellipsis">
                    {item.description}
                  </p>
                  <button
                    onClick={() => {
                      document.body.style.overflow = "hidden";
                      setOverlay({
                        open: true,
                        image: item.image,
                        title: item.title,
                        description: item.description,
                        price: item.price,
                        rate: item.rating.rate,
                        count: item.rating.count,
                      });
                    }}
                    className="capitalize flex items-center gap-2 justify-center bg-gray-300 p-1 text-black text-xl rounded-md shadow-md hover:bg-green-500 hover:text-white transition-all"
                  >
                    show more
                    <IoIosEye size={30} className="mt-1" />
                  </button>
                </div>
              );
            })}
        </div>
      </div>
      <Overlay {...overlay} setter={setOverlay} />
    </>
  );
};

export default Products;
