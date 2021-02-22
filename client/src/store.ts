import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import popularMoviesReducer from "./reducers/PopularMoviesReducer";

const RootReducer = combineReducers({
  popularMovies: popularMoviesReducer,
});

const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));
export type RootStore = ReturnType<typeof RootReducer>;
export default store;
