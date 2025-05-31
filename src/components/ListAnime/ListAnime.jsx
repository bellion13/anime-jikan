import React from 'react'
import { useEffect, useState } from 'react';
import AnimeSlider from '../../components/AnimeSlider/AnimeSlider';
import { getTopAnime, getMovieAnime,getAllAnime } from '../../configApi/jikanApi';

import './ListAnime.scss'
const ListAnime = () => {
    const [topAnime, setTopAnimeList] = useState([]);
    const [animeList, setAnimeList] = useState([]);
    const [movieList, setMovieList] = useState([]);
    // useEffect(() => {

    //     const fetchTopAnime = async () => {
    //         try {
    //             const res = await getTopAnime();
    //             setTopAnimeList(res.data);
    //         } catch (err) {
    //             console.error('Lỗi khi fetch dữ liệu anime:', err);
    //         }

    //     };

    //     fetchTopAnime();
    // }, []);

    // useEffect(() => {
    //     const fetchMovie = async () => {
    //         try {
    //             const res = await getMovieAnime();
    //             setMovieList(res.data); // data.data là mảng anime
    //         } catch (err) {
    //             console.error('Lỗi khi fetch dữ liệu movie:', err);
    //         }
    //     };

    //     fetchMovie();
    // }, []);
    // useEffect(() => {
    //     const fetchAnimeList = async () => {
    //         try {
    //             const res = await getAllAnime();
    //             setAnimeList(res.data); // data.data là mảng anime
    //         } catch (err) {
    //             console.error('Lỗi khi fetch dữ liệu movie:', err);
    //         }
    //     };

    //     fetchAnimeList();
    // }, []);
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


            {/* <div className="container">
                <div className="list-anime-top">
                    <h2 className='list-anime__title'>Movies</h2>
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
                        {movieList && movieList.length > 0 && movieList.map((movie) => (
                            <SwiperSlide key={movie.mal_id}>
                                <ItemAnime
                                    image={movie.images.jpg.image_url}
                                    title={movie.title}
                                    rating={movie.score}
                                    episodes={movie.episodes}
                                    rank={movie.rank}
                                    synopsis={movie.synopsis}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            </div>
            */}
        </div>

    )
}

export default ListAnime