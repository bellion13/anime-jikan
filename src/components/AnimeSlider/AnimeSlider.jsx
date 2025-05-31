import Button from "../Button/Button";
import ItemAnime from "../ItemAnime/ItemAnime";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./AnimeSlider.scss";

const AnimeSlider = ({ title, list }) => (
  <div className="container">
    <div className="list-anime-top">
      <h2 className='list-anime__title'>{title}</h2>
      <Button className="btn-outline list-anime__show">Show</Button>
    </div>
    <div className='list-anime-bottom'>
      <Swiper
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={'auto'}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 }
        }}
      >
        {list.map((anime) => (
          <SwiperSlide key={anime.mal_id}>
            <ItemAnime
            mal_id={anime.mal_id}
              image={anime.images.jpg.image_url}
              title={anime.title}
              rating={anime.score}
              episodes={anime.episodes}
              rank={anime.rank}
              synopsis={anime.synopsis}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
);
export default AnimeSlider;
