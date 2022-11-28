import { MovieData } from "../../types/movie";
import "./styles.css";

type Props = {
  movies: MovieData;
};
const MovieCatalog = ({ movies }: Props) => {
  return (
    <div className="row catalog-title-container">
      <div className="col-sm-6 col-lg-4 col-xl-12 list-filme">
        <h1> Acessar /moveis/{movies.id}</h1>
      </div>
    </div>
  );
};
export default MovieCatalog;
