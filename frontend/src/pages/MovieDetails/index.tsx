import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieReviews from "../../components/MovieReviews";
import { MovieData } from "../../types/movie";
import { requestBackend } from "../../util/requests";

type UrlParams = {
    movieId: string;
};

const MovieDetails = () => {
    const { movieId } = useParams<UrlParams>();

    const [movie, setMovie] = useState<MovieData>();

    useEffect(() => {
        const params: AxiosRequestConfig = {
            method: 'GET',
            url: `/movies/${movieId}`,
            withCredentials: true,
        };
        requestBackend(params)
            .then((response) => {
                setMovie(response.data);
            });
    }, [movieId]);
    return (
        <div>
            {/* <img src={movie?.imgUrl} alt={movie?.title} /> */}
            <MovieReviews />
        </div>
    )
}
export default MovieDetails;