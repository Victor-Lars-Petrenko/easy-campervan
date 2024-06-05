import { useState } from "react";
import CardHeading from "./CardHeading";
import CardReviewsLocation from "./CardReviewsLocation";
import InfoIconsList from "./InfoIconsList";
import Button from "components/Button";
import css from "./CardItem.module.css";
import Modal from "components/Modal";

const CardItem = ({ card }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const open = () => {
    setIsModalOpen(true);
  };
  const close = () => setIsModalOpen(false);

  return (
    <>
      <div className={css.cardItem}>
        <div className={css.imageContainer}>
          <img
            alt={card.name}
            className={css.cardPicture}
            src={card.gallery[0]}
          />
        </div>
        <div className={css.cardInfo}>
          <div className={css.cardInfoHeading}>
            <CardHeading id={card._id} name={card.name} price={card.price} />
            <CardReviewsLocation
              rating={card.rating}
              reviews={card.reviews}
              location={card.location}
            />
          </div>
          <div className={css.descrWrap}>
            <p className={css.cardDescription}>{card.description}</p>
          </div>
          <InfoIconsList listVariant="short" card={card} />
          <Button
            type="button"
            text="Show more"
            btnStyle="primaryBtn"
            onClick={open}
          />
        </div>
      </div>
      {isModalOpen && <Modal close={close}>Hello World</Modal>}
    </>
  );
};

export default CardItem;
