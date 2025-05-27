import React from 'react'
import './ItemAnime.scss'
const ItemAnime = ({ image, title, rating, episodes }) => (
  <div className="list-anime__item">
    <div className="list-anime__item__img">
      <img src={image} alt={title} />
    </div>
    <div className="list-anime__item__info">
      <h3>{title}</h3>
      <p>Rating: {rating}</p>
      <p>Episodes: {episodes}</p>
    </div>
  </div>
);
// import PropTypes from 'prop-types';
// ItemAnime.propTypes = {
//   image: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired,
//   episodes: PropTypes.number.isRequired,
// };
export default ItemAnime;