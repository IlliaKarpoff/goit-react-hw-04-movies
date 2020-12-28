import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import AppBar from './components/AppBar/AppBar';
import Container from './components/Layouts/Container';

const HomeView = lazy(() => import('./components/Views/HomeView'));
const SearchMoviesView = lazy(() =>
  import('./components/Views/SearchMoviesView'),
);
const MovieDetailsView = lazy(() =>
  import('./components/Views/MovieDetailsView'),
);

function App() {
  return (
    <>
      <Container>
        <AppBar />

        <Suspense
          fallback={<Loader type="Rings" timeout={10000} color="#ff0000" />}
        >
          <Switch>
            <Route path="/" exact component={HomeView} />
            <Route path="/movies" component={SearchMoviesView} exact />
            <Route path="/movies/:movieId" component={MovieDetailsView} />
          </Switch>
        </Suspense>
      </Container>
    </>
  );
}

export default App;
