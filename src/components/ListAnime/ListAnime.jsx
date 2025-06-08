import React from 'react'
import { useEffect, useState } from 'react';
import AnimeSlider from '../../components/AnimeSlider/AnimeSlider';
import { getTopAnime, getMovieAnime,getAllAnime } from '../../configApi/jikanApi';

import './ListAnime.scss'
const ListAnime = () => {
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
    return (
        <div className='section'>
            <AnimeSlider title="BXH Anime" list={topAnime} />
            
            <AnimeSlider title="Movies" list={movieList} />
            <AnimeSlider title="List Anime" list={animeList} />
        </div>

    )
}
export default ListAnime