import { useState, useEffect } from 'react';
import { fetchMovieCredits } from '../../services/tmdb-api';
import { makeImagePath } from '../../functions/secondaryFunctions';
import s from './Cast.module.css';

export default function Cast({ movieId }) {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetchMovieCredits(movieId).then(setActors);
  }, [movieId]);

  return (
    <ul className={s.list}>
      {actors.map(({ profile_path, name, id }) => {
        const imageUrl = makeImagePath(profile_path, 'w185');
        return (
          <li key={id}>
            <img src={imageUrl} alt={name} width="130" />
            <h2 className={s.title}>{name}</h2>
          </li>
        );
      })}
    </ul>
  );
}
