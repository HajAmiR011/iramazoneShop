import { SwiperSlide } from "swiper/react";
import Sliders from "../Sliders/Sliders";
import { useContext } from "react";
import { storage } from "../../App";

const Offers = () => {
  const { all } = useContext(storage);

  return (
    <>
      <h1 className="max-w-[1200px] mx-auto text-3xl font-bold text-white capitalize p-3 xl:p-0">
        offers
      </h1>
      <div className="w-full max-w-[1200px] mx-auto">
        <Sliders pag={false} view={"auto"} className={"px-3 py-7"}>
          {all
            .filter((item) => item.price < 25)
            .map((item) => {
              return (
                <SwiperSlide className="w-fit mx-2">
                  <div className="w-[300px] rounded-lg bg-[white] shadow-xl flex flex-col p-3 gap-2">
                    <img
                      src={item.image}
                      className="h-[200px] object-contain"
                    />
                    <h2 className="text-xl font-semibold text-ellipsis whitespace-nowrap overflow-hidden h-[30px]">
                      {item.title}
                    </h2>
                    <p className="text-ellipsis whitespace-nowrap overflow-hidden ">
                      {item.description}
                    </p>
                    <p>price: {item.price}$</p>
                    <p className="line-through text-gray-400">
                      {item.price * 2}$
                    </p>
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
