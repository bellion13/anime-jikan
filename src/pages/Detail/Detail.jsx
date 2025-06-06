
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAnimeDetails, getAnimeCharacters } from '../../configApi/jikanApi';
import './Detail.scss';
import Trailer from './Trailer';
import Seasonal from './Seasonal';
const Detail = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);
  const [characters, setCharacters] = useState([]);


  useEffect(() => {
    const fetchDetail = async () => {
      try {
        // console.log('Anime ID:', id);

        const res = await getAnimeDetails(id);
        setAnime(res.data);

        // Lấy danh sách nhân vật
        const charRes = await getAnimeCharacters(id);
        // console.log('Characters:', charRes.data);
        setCharacters(charRes)

      } catch (err) {
        console.error('Lỗi khi fetch chi tiết anime:', err);
      }
    };

    fetchDetail();
  }, [id]);

  if (!anime) return <p>Loading...</p>;
  return (
   <>
    <div className="detail-container">
      <div className="detail-background" style={{ backgroundImage: `url(${anime.images.jpg.image_url})` }}></div>
      <div className="detail-body">
        <div className="detail-content">
          <img src={anime.images.jpg.image_url} alt={anime.title} className="detail-image" />
          <div className="detail-info">
            <h1 className="detail-title">{anime.title}</h1>
            <p><strong>Đánh giá:</strong> {anime.score}</p>
            <p><strong>Số tập:</strong> {anime.episodes}</p>
            <p><strong>Giới thiệu :</strong> {anime.synopsis}</p>
            <p><strong>Thể loại:</strong> {anime.genres.map((genre) => genre.name).join(', ')}</p>
            <p><strong>Trạng thái:</strong> {anime.status}</p>
            <div className='characters'><strong>Nhân Vật:</strong> 
              <ul className="character-list">
                {characters && characters.slice(0, 5).map((item) => (
                  <li key={item.character.mal_id}>
                    {item.character.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Trailer />
    <Seasonal id={id}/>
  </>
  );
};

export default Detail;
