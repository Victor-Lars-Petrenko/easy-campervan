import Button from "components/Button";

import sprite from "../../../../../assets/images/icons.svg";

import css from "./CardModalForm.module.css";

const CardModalForm = () => {
  return (
    <form className={css.form}>
      <h4 className={css.formTitle}>Book your campervan now</h4>
      <p className={css.formText}>
        Stay connected! We are always ready to help you.
      </p>
      <input
        className={css.formInput}
        type="text"
        placeholder="Name"
        name="name"
      />
      <input
        className={css.formInput}
        type="text"
        placeholder="Email"
        name="email"
      />
      <div className={css.dateWrap}>
        <input
          className={css.formInput + " " + css.formInputDate}
          type="text"
          placeholder="Booking date"
          name="booking date"
        />
        <button type="button" className={css.calendarBtn}>
          <svg className={css.iconCalendar}>
            <use href={`${sprite}#icon-calendar`} />
          </svg>
        </button>
      </div>
      <textarea
        className={css.formInput + " " + css.formTextarea}
        placeholder="Comment"
        name="comment"
      />
      <div className={css.btnWrap}>
        <Button type="submit" text="Send" btnStyle="submitBtn" />
      </div>
    </form>
  );
};

export default CardModalForm;
