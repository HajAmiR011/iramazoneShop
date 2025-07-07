import { SwiperSlide } from "swiper/react";
import Sliders from "../Sliders/Sliders";
import { useContext, useEffect, useState } from "react";
import { storage } from "../../pages/Home/Home";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Offers = () => {
  const { all } = useContext(storage);
  const [photo, setPhoto] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  useEffect(() => {
    setTimeout(() => {
      all.map((item) => {
        setPhoto(item.image);
        setTitle(item.title);
        setDescription(item.description);
        setPrice(item.price);
      });
    }, 2000);
  });

  return (
    <>
      <h1 className="max-w-[1200px] mt-5 mx-auto text-3xl font-bold text-white capitalize p-3 xl:p-0">
        offers
      </h1>
      <div className="w-full max-w-[1200px] mx-auto">
        <Sliders pag={false} view={"auto"} className={"px-3 py-5"}>
          {all
            .filter((item) => item.price < 25)
            .map((item) => {
              return (
                <SwiperSlide className="w-fit mx-2">
                  <div className="w-[300px] rounded-lg bg-[white] shadow-xl flex flex-col p-3 gap-2">
                    {photo ? (
                      <img
                        src={item.image}
                        className="h-[200px] object-contain"
                      />
                    ) : null}
                    {!photo ? (
                      <Skeleton
                        width={"276px"}
                        height={"200px"}
                        baseColor="#2b2b2b"
                      />
                    ) : null}
                    {title ? (
                      <h2 className="text-xl font-semibold text-ellipsis whitespace-nowrap overflow-hidden h-[30px]">
                        {item.title}
                      </h2>
                    ) : null}
                    {!title ? <Skeleton count={1} baseColor="#2b2b2b" /> : null}
                    {description ? (
                      <p className="text-ellipsis whitespace-nowrap overflow-hidden ">
                        {item.description}
                      </p>
                    ) : null}
                    {!description ? (
                      <Skeleton count={1} baseColor="#2b2b2b" />
                    ) : null}
                    {price ? <p>price: {item.price}$</p> : null}
                    {!price ? <Skeleton count={1} baseColor="#2b2b2b" /> : null}
                    {price ? (
                      <p className="line-through text-gray-400">
                        {item.price * 2}$
                      </p>
                    ) : null}
                  </div>
                </SwiperSlide>
              );
            })}
        </Sliders>
      </div>
    </>
  );
};

export default Offers;
