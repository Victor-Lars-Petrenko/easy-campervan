import css from "./CardModalReviews.module.css";
import ReviewItem from "./ReviewItem";

const CardModalReviews = ({ reviews }) => {
  return (
    <ul className={css.reviews}>
      {reviews.map(({ reviewer_name, reviewer_rating, comment }) => (
        <ReviewItem
          key={reviewer_name + reviewer_rating}
          name={reviewer_name}
          rating={reviewer_rating}
          comment={comment}
        />
      ))}
    </ul>
  );
};

export default CardModalReviews;
