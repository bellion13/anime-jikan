
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAnimeDetails } from '../../configApi/jikanApi';
import './Detail.scss';
const Detail = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);


  useEffect(() => {
    const fetchDetail = async () => {
      try {
        console.log('Anime ID:', id);
        const res = await getAnimeDetails(id);
        setAnime(res.data);
        
      } catch (err) {
        console.error('Lỗi khi fetch chi tiết anime:', err);
      }
    };

    fetchDetail();
  }, [id]);

  if (!anime) return <p>Loading...</p>;
  return (
    <div className="detail-page p-4">
      <h2 className="text-2xl font-bold">{anime.title}</h2>
      <img src={anime.images.jpg.image_url} alt={anime.title} className="w-64 rounded my-4" />
      <p><strong>Score:</strong> {anime.score}</p>
      <p><strong>Episodes:</strong> {anime.episodes}</p>
      <p className="mt-2"><strong>Synopsis:</strong> {anime.synopsis}</p>
    </div>
  );
};

export default Detail;
