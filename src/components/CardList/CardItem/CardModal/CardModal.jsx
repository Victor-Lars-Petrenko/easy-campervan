import Modal from "components/Modal";
import css from "./CardModal.module.css";
import CardReviewsLocation from "../CardReviewsLocation";

const CardModal = ({ close, card }) => {
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
    </Modal>
  );
};

export default CardModal;
