import React from 'react'
import { useEffect, useState } from 'react';
import AnimeSlider from '../../components/AnimeSlider/AnimeSlider';
import { getTopAnime, getMovieAnime, getAllAnime } from '../../configApi/jikanApi';
import Button from '../../components/Button/Button';
import './ListAnime.scss'
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ListAnime = () => {
  const navigate = useNavigate();

  const [topAnime, setTopAnimeList] = useState([]);
  const [animeList, setAnimeList] = useState([]);
  const [movieList, setMovieList] = useState([]);
  //fix lõi 429 ---
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const topAnime = await getTopAnime();
        setTopAnimeList(topAnime.data);

        await delay(1500);  // chờ 1.5s

        const movies = await getMovieAnime();
        setMovieList(movies.data);

        await delay(1500);  // chờ 1.5s

        const allAnime = await getAllAnime();
        setAnimeList(allAnime.data);
      } catch (err) {
        console.error('Lỗi gọi API:', err);
      }
    };

    fetchData();
  }, []);
  //fix lõi 429 ---
  useEffect(() => {
  AOS.init({
    duration: 1000, // thời gian chạy animation
    once: false,     // chỉ chạy một lần khi phần tử xuất hiện
  });
}, []);
  return (
    <div className='section'>
      <div className="list-anime-top " data-aos="fade-up" data-aos-delay="0">
        <div className='list-anime-top__header'>
          <h2 className="list-anime__title">Top Anime</h2>
          <Button className="btn-outline list-anime__show"
            onClick={() => navigate('/anime')} // ✅ chuyển đúng đến trang anime
          >Show</Button>
        </div>
        <AnimeSlider list={topAnime} />
      </div>
      <div className="list-anime-top " data-aos="fade-up" data-aos-delay="200">
        <div className='list-anime-top__header'>
          <h2 className="list-anime__title">Movies</h2>
          <Button className="btn-outline list-anime__show"
          onClick={() => navigate('/movie')}>Show</Button>
        </div>
        <AnimeSlider list={movieList} />
      </div>
      <div className="list-anime-top " data-aos="fade-up" data-aos-delay="400">
        <div className='list-anime-top__header'>
          <h2 className="list-anime__title">List Anime</h2>
          <Button className="btn-outline list-anime__show"
          onClick={() => navigate('/anime')}>Show</Button>
        </div>
        <AnimeSlider list={animeList} />
      </div>
    </div>

  )
}
export default ListAnime