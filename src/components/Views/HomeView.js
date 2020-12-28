import { useState, useEffect } from 'react';
import { fetchTrandingMovie } from '../../services/tmdb-api';
import MovieList from '../MovieList/MovieList';
import useTotalPage from '../Hooks/useTotalPage';

export default function HomeView() {
  const [trandingMovie, setTrandingMovie] = useState([]);

  const { page, totalPage, setPage, setTotalPage } = useTotalPage();

  useEffect(() => {
    fetchTrandingMovie(page).then(([result, total]) => {
      setTrandingMovie(result);
      setTotalPage(total);
    });
  }, [page, setTotalPage]);

  return (
    <>
      <h1>Tranding Movies</h1>

      {trandingMovie && (
        <MovieList
          movies={trandingMovie}
          total={totalPage}
          onChangePage={setPage}
        />
      )}
    </>
  );
}
