import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import Button from './../../components/Button/Button';
import { getTopAnime, getAnimeTrailer } from '../../configApi/jikanApi';
import { useNavigate } from 'react-router-dom';

import './HeroSlider.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Modal from 'react-modal';
Modal.setAppElement('#root');

import { Autoplay } from 'swiper/modules';
function HeroSlider() {
  const [animes, setAnimes] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [youtubeId, setYoutubeId] = useState('');
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    const fetchAnimes = async () => {
      try {
        const res = await getTopAnime();
        if (Array.isArray(res.data)) {
          setAnimes(res.data.slice(0, 10)); // Lấy top 5 anime
        } else {
          console.log('Dữ liệu trả về lỗi:');
        }
      } catch (error) {
        console.error('Lỗi gọi API:', error);
      }
    };

    fetchAnimes();
  }, []);
  useEffect(() => {
    if (swiperInstance) {
      if (isOpen) {
        swiperInstance.autoplay.stop(); // Dừng khi mở modal
      } else {
        swiperInstance.autoplay.start(); // Tiếp tục khi đóng modal
      }
    }
  }, [isOpen, swiperInstance]);
  // Gọi trailer khi nhấn nút
  const handleWatchTrailer = async (animeId) => {
    try {
      const trailer = await getAnimeTrailer(animeId);
      const id = trailer?.youtube_id;
      if (id) {
        setYoutubeId(id);
        setIsOpen(true);
      } else {
        alert("Không có trailer");
      }
    } catch (err) {
      console.error("Lỗi lấy trailer:", err);
    }
  };
  return (

    <>
      <Swiper
        onSwiper={setSwiperInstance}
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{ clickable: true }}
        spaceBetween={15}
        slidesPerView={1}
        className='hero-slider'

      >
        {animes && animes.length > 0 && animes.map((anime) => (
          <SwiperSlide key={anime.mal_id}>
            <div
              className="hero-slide__bg"
              style={{ backgroundImage: `url(${anime.images.jpg.large_image_url})` }}
            />
            <HeroSlideItem anime={anime} onWatchTrailer={handleWatchTrailer} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        className="modal-box"
        overlayClassName="modal-overlay"
      >
        <button onClick={() => setIsOpen(false)} className="close-btn">×</button>
        {youtubeId ? (
          <iframe

            width="100%"
            height="450"
            src={`https://www.youtube.com/embed/${youtubeId}`}
            title="Trailer"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        ) : (
          <p>Không tìm thấy trailer</p>
        )}
      </Modal>
    </>
  );

}

const HeroSlideItem = ({ anime, onWatchTrailer }) => {
  const navigate = useNavigate();
  return (
    <div className="hero-slide__item ">
      <div className="hero-slide__item__content">
        <div className="hero-slide__item__content__info">
          <h2 className="hero-slide__item__content__info__title">
            <div className="hero-slide__item__content__title">{anime.title}</div>
            <div className="hero-slide__item__content__overview text-multiline">{anime.synopsis}</div>
          </h2>
          <div className="hero-slide__item__content__btns">
            <Button className='btn' onClick={() => navigate(`/anime/${anime.mal_id}`)}>
              Watch now
            </Button>
            <Button className="btn-outline" onClick={() => onWatchTrailer(anime.mal_id)}>
              Watch trailer
            </Button>
          </div>
        </div>
        <div className="hero-slide__item__content__poster">
          <img src={anime.images.jpg.image_url} alt={anime.title} />
        </div>
      </div>
    </div>
  )
}


export default HeroSlider;