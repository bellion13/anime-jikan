import Button from "../Button/Button";
import ItemAnime from "../ItemAnime/ItemAnime";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./AnimeSlider.scss";

const AnimeSlider = ({ title, list }) => {
  //  Lọc danh sách anime để không trùng `mal_id`
  const uniqueList = list.filter(
    (item, index, self) => index === self.findIndex((t) => t.mal_id === item.mal_id)
  );

  return (
    <div className="container">
      <div className="list-anime-top">
        <h2 className="list-anime__title">{title}</h2>
        <Button className="btn-outline list-anime__show">Show</Button>
      </div>
      <div className="list-anime-bottom">
        <Swiper
          grabCursor={true}
          spaceBetween={10}
          slidesPerView={"auto"}
          // breakpoints={{
          //   640: { slidesPerView: 2, spaceBetween: 20 },
          //   1024: { slidesPerView: 3, spaceBetween: 30 },
          // }}
        >
          {uniqueList.map((anime) => (
            <SwiperSlide key={anime.mal_id}>
              <ItemAnime key={anime.mal_id} item={anime} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default AnimeSlider;
