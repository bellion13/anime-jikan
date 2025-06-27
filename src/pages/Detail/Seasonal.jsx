import React, { useEffect, useState } from 'react';
import AnimeSlider from '../../components/AnimeSlider/AnimeSlider';
import { getSeasonalAnime } from '../../configApi/jikanApi';
import "../../components/AnimeSlider/AnimeSlider.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Seasonal = () => {
  const [animeSeasonal, setAnimeSeasonal] = useState([]);

  useEffect(() => {
    const fetchDataSeasonal = async () => {
      try {
        const res = await getSeasonalAnime();
        setAnimeSeasonal(res);
      } catch (err) {
        console.error('Lỗi gọi API Seasonal:', err);
      }
    };
      fetchDataSeasonal();
  }, []);
  //animations
useEffect(() => {
  AOS.init({
    duration: 1000, // thời gian chạy animation
    once: false,     // chỉ chạy một lần khi phần tử xuất hiện
  });
}, []);
  return (
    <div className='section' data-aos="fade-up" data-aos-delay="200">
      <h2 className='section-title'>Anime Mùa Hiện Tại</h2>
      <AnimeSlider list={animeSeasonal} />
    </div>
  );
};

export default Seasonal;
