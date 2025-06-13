import React, { useEffect, useState } from 'react';
import AnimeSlider from '../../components/AnimeSlider/AnimeSlider';
import { getSeasonalAnime } from '../../configApi/jikanApi';
import "../../components/AnimeSlider/AnimeSlider.scss";

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

  return (
    <div className='section'>
      <h2 className='section-title'>Anime Mùa Hiện Tại</h2>
      <AnimeSlider list={animeSeasonal} />
    </div>
  );
};

export default Seasonal;
