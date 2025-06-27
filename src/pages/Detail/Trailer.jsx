import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAnimeTrailer } from '../../configApi/jikanApi';

import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Trailer = () => {
  const { id } = useParams();
  const [trailer, setTrailer] = useState(null);

  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const res = await getAnimeTrailer(id);
        await delay(1500);  // Chờ 1.5 giây để tránh lỗi 429
        setTrailer(res);
      } catch (err) {
        console.error('Lỗi gọi API trailer:', err);
      }
    };

    fetchTrailer();
  }, [id]);
  //animation
useEffect(() => {
  AOS.init({
    duration: 1000, // thời gian chạy animation
    once: false,     // chỉ chạy một lần khi phần tử xuất hiện
  });
}, []);
  return (
    <div className="trailer-container  " data-aos="fade-up" data-aos-delay="0">
      <h2>Trailer</h2>
      {trailer?.youtube_id ? (
        <iframe
          className="container"
          width="100%"
          height="750"
          src={`https://www.youtube.com/embed/${trailer.youtube_id}`}
          title="Anime Trailer"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      ) : (
        <p>Hiện tại chưa có trailer cho anime này.</p>
      )}
    </div>
  );
};

export default Trailer;
