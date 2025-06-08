import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from '../../components/PageHeader/PageHeader';
import ItemAnime from '../../components/ItemAnime/ItemAnime';
import { getAnimeByCategory } from '../../configApi/jikanApi';
const Catalog = () => {
    const { category } = useParams();
    const [animeList, setAnimeList] = useState([]);

useEffect(() => {
    const fetchAllAnime = async () => {
        try {
            const res = await getAnimeByCategory(category);
            const data = res.data;

            if (Array.isArray(data)) {
                setAnimeList(data);
            } else {
                setAnimeList([]);
                console.error('API trả về không phải mảng:', res);
            }
        } catch (err) {
            setAnimeList([]);
            console.error('Lỗi khi fetch chi tiết anime:', err);
        }
    };
    fetchAllAnime();
}, [category]);
    return (
        <>
            <PageHeader>
                {category === 'anime' ? 'Anime' : 'Movies'}
            </PageHeader>
            <div className='catalog container'>
                <div className="catalog__list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
                    {animeList && animeList.length > 0 ? (
                        animeList.map(anime => (
                            <ItemAnime key={anime.mal_id} item={anime} />
                        ))
                    ) : (
                        <p>Không có dữ liệu hoặc API bị giới hạn. Vui lòng thử lại sau.</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default Catalog;
