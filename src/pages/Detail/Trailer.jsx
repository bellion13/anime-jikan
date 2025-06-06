import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAnimeTrailer } from '../../configApi/jikanApi';

const Trailer = () => {
  const { id } = useParams(); // lấy id từ URL
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    const fetchAnimeTrailer = async () => {
      try {
        const res = await getAnimeTrailer(id); // truyền id vào
        setTrailer(res); 
      } catch (error) {
        console.error('Error fetching anime trailer:', error);
      }
    };
    fetchAnimeTrailer(); // gọi hàm đúng cách
  }, [id]);

  return (
    <div>
      {trailer?.youtube_id && (
        <div className="trailer-container">
          <h2>Trailer</h2>
          <iframe
            width="100%"
            height="750"
            src={`https://www.youtube.com/embed/${trailer.youtube_id}`}
            title="Anime Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Trailer;
