import { Movie } from "../../types/MovieTypes";

type showcaseCardProps = {
  movie: Movie;
};

const ShowcaseCard = ({ movie }: showcaseCardProps) => {
  return <li>{movie.title}</li>;
};

export default ShowcaseCard;
