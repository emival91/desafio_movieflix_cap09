import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Review } from "../../types/review";
import { hasAnyRoles } from "../../util/auth";
import { requestBackend } from "../../util/requests";
import FormReviews from "../FormReviews";
import ReviewList from "../ReviewList";

import './styles.css';

type UrlParams = {
  movieId: string;
};

const MovieReviews = () => {
  const { movieId } = useParams<UrlParams>();

  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: "GET",
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };
    requestBackend(config).then((response) => {
      setReviews(response.data);
    });
  }, [movieId]);

  const handleInsertReview = (review: Review) => {
    const clone = [...reviews];
    clone.push(review);
    setReviews(clone);
    console.log(reviews);
  };

  return (
    <>
      <div className="movie-reviews-container container">
      <h1> Tela detalhes do filme id:{movieId} </h1>
      <div className="form-review">
        {hasAnyRoles(['ROLE_MEMBER']) && (
          <FormReviews movieId={movieId} onIsertReview={handleInsertReview} />
        )}
      </div>
        <div className="list-review">
          <ReviewList reviews={reviews} />
        </div>
      </div>
    </>
  );
};
export default MovieReviews;
