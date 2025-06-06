import React, { useEffect, useState } from 'react';
import { getAnimeSimilar } from '../../configApi/jikanApi';

const Similar = ({ id }) => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchRecs = async () => {
      try {
        const res = await getAnimeSimilar(id);
        setRecommendations(res.data);
        console.log('Recommendations:', res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRecs();
  }, [id]);

  return (
    <div>
      <h3>Anime Tương Tự</h3>
      <ul>
        {recommendations.slice(0, 5).map(rec => (
          <li key={rec.mal_id}>
            <a href={rec.entry.url} target="_blank" rel="noopener noreferrer">
              {rec.entry.title}
            </a> - Votes: {rec.votes}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Similar;
