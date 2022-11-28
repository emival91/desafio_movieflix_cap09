import { Review } from "../../types/review";
import { ReactComponent as ImgReviews } from '../../assets/images/estrela.svg';

import './styles.css';

type ListReviews = {
  reviews: Review[];
};
const ReviewList = ({ reviews }: ListReviews) => {
  return (
    <>
      <div className="reviews-container">
        {reviews?.map((review) => (
          <div className="content-reviews" key={review.id}>
            <div className="review-list">
              <div className="base-image-name">
                <ImgReviews />
              </div>
              <h3>{review.user.name}</h3>
            </div>
            <div className="review-text ">
              <p>{review.text}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default ReviewList;
