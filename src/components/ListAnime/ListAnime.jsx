import React from 'react'
import { useEffect, useState } from 'react';

import Button from './../../components/Button/Button';
import ItemAnime from '../../components/ItemAnime/ItemAnime';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import './ListAnime.scss'
const ListAnime = () => {
    const [animeList, setAnimeList] = useState([]);

    useEffect(() => {
        const fetchAnime = async () => {
            try {
                const res = await fetch('https://api.jikan.moe/v4/top/anime');
                const data = await res.json();
                setAnimeList(data.data); // data.data là mảng anime
            } catch (err) {
                console.error('Lỗi khi fetch dữ liệu anime:', err);
            }
        };

        fetchAnime();
    }, []);

    return (
        <div className='section'>
            <div className="container">
                <div className="list-anime-top">
                    <h2 className='list-anime__title'>BXH Anime</h2>
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
                        {animeList.map((anime) => (
                            <SwiperSlide key={anime.mal_id}>
                                <ItemAnime
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
            <div className="container">
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
                        {animeList.map((anime) => (
                            <SwiperSlide key={anime.mal_id}>
                                <ItemAnime
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
            <div className="container">
                <div className="list-anime-top">
                    <h2 className='list-anime__title'>Anime</h2>
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
                        {animeList.map((anime) => (
                            <SwiperSlide key={anime.mal_id}>
                                <ItemAnime
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
        </div>
        
    )
}

export default ListAnime