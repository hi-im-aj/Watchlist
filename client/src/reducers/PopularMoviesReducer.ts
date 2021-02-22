import {
  POPULAR_MOVIES_LOADING,
  POPULAR_MOVIES_FAIL,
  POPULAR_MOVIES_SUCCESS,
  PopularMoviesDispatchTypes,
  Movie,
} from "../types/MovieTypes";

interface InitialStateI {
  loading: boolean;
  popularMovies?: Array<Movie>;
  error?: string;
}

const initialState: InitialStateI = {
  loading: false,
};

export default (state: InitialStateI = initialState, action: PopularMoviesDispatchTypes): InitialStateI => {
  switch (action.type) {
    case POPULAR_MOVIES_LOADING:
      return {
        ...state,
        loading: true,
      };
    case POPULAR_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        popularMovies: action.payload,
      };
    case POPULAR_MOVIES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
