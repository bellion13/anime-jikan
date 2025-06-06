import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAnimeTrailer } from '../../configApi/jikanApi';

const Trailer = () => {
  const { id } = useParams(); // lấy id từ URL
  const [trailer, setTrailer] = useState(null);
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  useEffect(() => {
    const fetchAnimeTrailer = async () => {
      try {
        const res = await getAnimeTrailer(id); // truyền id vào
        await delay(1500); // chờ 1.5 giây
        setTrailer(res);
      } catch (error) {
        console.error('Error fetching anime trailer:', error);
      }
    };
    fetchAnimeTrailer();
  }, [id]);

  return (
    <div>
      <div className="trailer-container">
        <h2>Trailer</h2>
        {trailer?.youtube_id ? (
          <iframe
            width="100%"
            height="750"
            src={`https://www.youtube.com/embed/${trailer.youtube_id}`}
            title="Anime Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <p>Hiện tại chưa có trailer cho anime này.</p>
        )}
      </div>

    </div>
  );
};

export default Trailer;
