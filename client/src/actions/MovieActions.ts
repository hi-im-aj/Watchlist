import { Dispatch } from "redux";
import {
  POPULAR_MOVIES_SUCCESS,
  POPULAR_MOVIES_FAIL,
  POPULAR_MOVIES_LOADING,
  PopularMoviesDispatchTypes,
} from "../types/MovieTypes";
import axios from "axios";

export const getPopularMovies = () => async (dispatch: Dispatch<PopularMoviesDispatchTypes>) => {
  try {
    dispatch({
      type: POPULAR_MOVIES_LOADING,
    });
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY_V3}&language=en-US&page=1`
    );
    dispatch({
      type: POPULAR_MOVIES_SUCCESS,
      payload: res.data.results,
    });
  } catch (error) {
    dispatch({
      type: POPULAR_MOVIES_FAIL,
      payload: error.message,
    });
  }
};
