import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieCatalog from "../../components/MovieCatalog";
import { MovieData } from "../../types/movie";
import { SpringPage } from "../../types/vendor/spring";
import { requestBackend } from "../../util/requests";
import "./styles.css";

const Movies = () => {
  const [page, setPage] = useState<SpringPage<MovieData>>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: "GET",
      url: "/movies",
      withCredentials: true,
    };
    requestBackend(params)
      .then((response) => {
        setPage(response.data);
      })
      .finally(() => {});
  }, []);

  return (
    <>
      <div>
        <div className="movie-card">
          <h1>Tela listagem de filmes</h1>
        </div>
        <div className="card-bottom-container">
          {page?.content.map((movie) => (
            <div className="row" key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <MovieCatalog movies={movie} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Movies;
