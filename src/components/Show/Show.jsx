import Cards from "../Cards/Cards";
import md_1 from "../../assets/images/md-1.webp";
import md_2 from "../../assets/images/md-2.webp";
import md_3 from "../../assets/images/md-3.webp";
const Show = () => {
  return (
    <div className="flex flex-wrap justify-center items-start my-5 max-w-[1200px] gap-5 mx-auto">
      <Cards image={md_1} />
      <Cards image={md_2} />
      <Cards image={md_3} />
    </div>
  );
};

export default Show;
