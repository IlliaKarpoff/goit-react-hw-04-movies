import { useState, useEffect } from 'react';
import { fetchMovieReviews } from '../../services/tmdb-api';
import s from './Reviews.module.css';

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <ul>
      {reviews ? (
        reviews.map(({ author, content, id }) => (
          <li key={id} className={s.item}>
            <h3 className={s.title}>Author: {author}</h3>
            <p className={s.review}>{content}</p>
          </li>
        ))
      ) : (
        <p>No reviews</p>
      )}
    </ul>
  );
}
