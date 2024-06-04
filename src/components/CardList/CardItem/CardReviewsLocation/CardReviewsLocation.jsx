import sprite from "../../../../assets/images/icons.svg";

import css from "./CardReviewsLocation.module.css";

const CardReviewsLocation = ({ rating, reviews, location }) => {
  const reviewsText = `${rating} (${reviews.length} ${
    reviews.length === 1 ? "Review" : "Reviews"
  })`;

  const locationText = `${location.split(", ").reverse().join(", ")}`;

  return (
    <div className={css.cardReviewsLocation}>
      <div className={css.cardWrapper}>
        <svg className={css.icon + " " + css.starIcon}>
          <use href={`${sprite}#icon-star`} />
        </svg>
        <h3 className={css.cardText + " " + css.cardReviewsText}>
          {reviewsText}
        </h3>
      </div>
      <div className={css.cardWrapper}>
        <svg className={css.icon + " " + css.locationIcon}>
          <use href={`${sprite}#icon-map-pin`} />
        </svg>
        <h3 className={css.cardText}>{locationText}</h3>
      </div>
    </div>
  );
};

export default CardReviewsLocation;
