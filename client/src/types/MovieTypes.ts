export const POPULAR_MOVIES_LOADING = "POPULAR_MOVIES_LOADING";
export const POPULAR_MOVIES_SUCCESS = "POPULAR_MOVIES_SUCCESS";
export const POPULAR_MOVIES_FAIL = "POPULAR_MOVIES_FAIL";

export type Movie = {
  id: number;
  title: string;
};

export interface PopularMoviesLoading {
  type: typeof POPULAR_MOVIES_LOADING;
}
export interface PopularMoviesSuccess {
  type: typeof POPULAR_MOVIES_SUCCESS;
  payload: Array<Movie>;
}
export interface PopularMoviesFail {
  type: typeof POPULAR_MOVIES_FAIL;
  payload: string;
}

export type PopularMoviesDispatchTypes = PopularMoviesLoading | PopularMoviesSuccess | PopularMoviesFail;
