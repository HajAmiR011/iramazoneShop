import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper } from "swiper/react";
import "swiper/css/bundle";
const Sliders = ({
  nav,
  pag,
  space,
  view,
  children,
  pointers,
  className,
  play,
}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Autoplay]}
      slidesPerView={view}
      spaceBetween={space}
      navigation={nav == false ? false : true}
      pagination={pag == false ? false : true}
      breakpoints={pointers}
      className={className ? className : ""}
      autoplay={play == false ? false : true}
    >
      {children}
    </Swiper>
  );
};

export default Sliders;
