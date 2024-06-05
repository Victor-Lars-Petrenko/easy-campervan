import { useState } from "react";

import Modal from "components/Modal";
import CardReviewsLocation from "../CardReviewsLocation";
import CardModalFeatures from "./CardModalFeatures";
import CardModalReviews from "./CardModalReviews";
import CardModalForm from "./CardModalForm";

import css from "./CardModal.module.css";

const cardNavArr = ["Features", "Reviews"];

const CardModal = ({ close, card }) => {
  const [detail, setDetail] = useState("Features");

  const handleClick = e => {
    setDetail(e.target.textContent);
  };

  const getCardNavStyle = (item, detail) => {
    let style = css.cardNavBtn;
    if (item === detail) {
      style += ` ${
        item === "Features" ? css.cardFeaturesActive : css.cardReviewsActive
      }`;
    }
    return style;
  };

  return (
    <Modal close={close}>
      <h2 className={css.cardTitle + " " + css.cardName}>{card.name}</h2>
      <CardReviewsLocation
        rating={card.rating}
        reviews={card.reviews}
        location={card.location}
      />
      <h2
        className={css.cardTile + " " + css.cardPrice}
      >{`€${card.price}.00`}</h2>
      <ul className={css.picturesList}>
        {card.gallery.map(picture => (
          <li key={picture} className={css.imageContainer}>
            <img alt={card.name} className={css.cardPicture} src={picture} />
          </li>
        ))}
      </ul>
      <p className={css.cardDescription}>{card.description}</p>
      <ul className={css.cardNavList}>
        {cardNavArr.map(item => (
          <li key={item}>
            <button
              className={getCardNavStyle(item, detail)}
              type="button"
              onClick={handleClick}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
      <div className={css.detailsWrap}>
        {detail === "Features" ? (
          <CardModalFeatures card={card} />
        ) : (
          <CardModalReviews reviews={card.reviews} />
        )}
        <CardModalForm />
      </div>
    </Modal>
  );
};

export default CardModal;
