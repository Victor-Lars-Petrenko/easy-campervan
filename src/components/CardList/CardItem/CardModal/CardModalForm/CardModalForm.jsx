import { useState } from "react";
import Notiflix from "notiflix";

import Button from "components/Button";

import sprite from "../../../../../assets/images/icons.svg";

import css from "./CardModalForm.module.css";

const initialState = {
  name: "",
  email: "",
  bookingDate: "",
  comment: "",
};

const CardModalForm = () => {
  const [formState, setFormState] = useState({ ...initialState });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = e => {
    const { name, email, bookingDate } = formState;
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      bookingDate.trim() === ""
    ) {
      e.preventDefault();
      Notiflix.Notify.failure(
        "Name, Email and Booking date fields cannot be empty"
      );
      return;
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <h4 className={css.formTitle}>Book your campervan now</h4>
      <p className={css.formText}>
        Stay connected! We are always ready to help you.
      </p>
      <input
        className={css.formInput}
        type="text"
        required
        placeholder="Name"
        name="name"
        value={formState.name}
        onChange={handleChange}
      />
      <input
        className={css.formInput}
        type="text"
        required
        placeholder="Email"
        name="email"
        value={formState.email}
        onChange={handleChange}
      />
      <div className={css.dateWrap}>
        <input
          className={`${css.formInput} ${css.formInputDate}`}
          type="text"
          required
          placeholder="Booking date"
          name="bookingDate"
          value={formState.bookingDate}
          onChange={handleChange}
        />
        <button type="button" className={css.calendarBtn}>
          <svg className={css.iconCalendar}>
            <use href={`${sprite}#icon-calendar`} />
          </svg>
        </button>
      </div>
      <textarea
        className={`${css.formInput} ${css.formTextarea}`}
        placeholder="Comment"
        name="comment"
        value={formState.comment}
        onChange={handleChange}
      />
      <div className={css.btnWrap}>
        <Button type="submit" text="Send" btnStyle="submitBtn" />
      </div>
    </form>
  );
};

export default CardModalForm;
