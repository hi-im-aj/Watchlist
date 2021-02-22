import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopularMovies } from "../../actions/MovieActions";
import { RootStore } from "../../store";
import ShowcaseCard from "../elements/ShowcaseCard";

const PopularMoviesShowcase = () => {
  const dispatch = useDispatch();

  const { loading, error, popularMovies } = useSelector((state: RootStore) => state.popularMovies);

  useEffect(() => {
    dispatch(getPopularMovies());
  }, [dispatch]);
  return (
    <div className="card">
      <div className="card-header">Todays most popular movies</div>
      {loading ? (
        <p>loading</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="card-body">
          {popularMovies !== undefined ? popularMovies.map((e) => <ShowcaseCard key={e.id} movie={e} />) : undefined}
        </div>
      )}
    </div>
  );
};

export default PopularMoviesShowcase;
