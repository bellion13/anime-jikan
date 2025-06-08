import React from 'react';
import Button from '../Button/Button';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/dist/border.css';
import { CiPlay1 } from "react-icons/ci";
import { Link } from 'react-router-dom';

import './ItemAnime.scss';

// const ItemAnime = ({ image, title, synopsis, score, episodes, rank, mal_id }) => {
  // console.log(mal_id);
  const ItemAnime = ({ item }) => {
  const {
    mal_id,
    title,
    synopsis,
    images,
    score,
    episodes,
    rank
  } = item;

  const image = images?.jpg?.image_url;
  return (
    <Link to={`/anime/${mal_id}`} className="list-anime__item">
      <Tippy 
        className="anime-tooltip"
        content={
          <div>
            <h4>{title}</h4>
            <p>{synopsis}</p>
            <p><strong>BXH: #</strong> {rank}</p>
            <p><strong>Đánh giá:</strong> {score}</p>
            <p><strong>Tập phim:</strong> {episodes}</p>
          </div>
        }
        placement="right"
        arrow={true}
        animation="fade"
        interactive={true}
        delay={[100, 50]}
      >
        <div className="list-anime__item__img">
          <img src={image} alt={title} />
        </div>
      </Tippy>

      <div className="list-anime__item__info">
        <h3>{title}</h3>
      </div>
      <div className="list-anime__item__button">
        <Button className="list-anime__item__button__play">
          <CiPlay1 />
        </Button>
      </div>
    </Link>
  );
};

export default ItemAnime;
