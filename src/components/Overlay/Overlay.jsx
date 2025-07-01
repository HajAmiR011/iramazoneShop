import { IoIosEyeOff } from "react-icons/io";
const Overlay = ({
  open,
  image,
  title,
  description,
  price,
  rate,
  count,
  setter,
}) => {
  return (
    open && (
      <div className="flex justify-center items-center fixed top-0 left-0 w-screen h-screen bg-black/50 backdrop-blur-sm z-10">
        <div className="relative w-[340px] justify-center items-center rounded-xl bg-white shadow-xl flex flex-col py-2 px-3 gap-3 max-h-[95%] overflow-y-auto lg:w-[500px]">
          <img
            src={image}
            alt={title}
            className="h-[200px] object-contain lg:h-[220px]"
          />
          <h2 className="w-full text-xl font-bold">{title}</h2>
          <h3 className="w-full text-sm text-justify">{description}</h3>
          <p className="w-full">price: {price}$</p>
          <div className="flex justify-between items-center w-full">
            <p>rate: {rate}</p>
            <p>count: {count}</p>
          </div>
          <button
            className="absolute top-1 right-1"
            onClick={() => {
              document.body.style.overflow = "auto";
              setter({
                open: false,
                image: "",
                title: "",
                description: "",
                price: "",
                rate: "",
                count: "",
              });
            }}
          >
            <IoIosEyeOff size={30} />
          </button>
        </div>
      </div>
    )
  );
};

export default Overlay;
