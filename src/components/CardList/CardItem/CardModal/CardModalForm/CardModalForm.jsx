import { useState } from "react";
import Notiflix from "notiflix";
import Button from "components/Button";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers";

import sprite from "../../../../../assets/images/icons.svg";
import css from "./CardModalForm.module.css";

const initialState = {
  name: "",
  email: "",
  comment: "",
};

const IconCalendar = () => {
  return (
    <svg className={css.iconCalendar}>
      <use href={`${sprite}#icon-calendar`} />
    </svg>
  );
};

const CardModalForm = () => {
  const [formState, setFormState] = useState({ ...initialState });

  const [bookingDate, setBookingDate] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = e => {
    const { name, email } = formState;
    if (name.trim() === "" || email.trim() === "" || bookingDate === null) {
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
        className={css.formInput + " " + css.formInputEmail}
        type="text"
        required
        placeholder="Email"
        name="email"
        value={formState.email}
        onChange={handleChange}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DesktopDatePicker
            value={bookingDate}
            disablePast={true}
            onChange={newValue => setBookingDate(newValue)}
            label="Booking date"
            slots={{
              openPickerIcon: IconCalendar,
            }}
            slotProps={{
              textField: {
                style: {
                  width: "400px",
                  height: "56px",
                  color: "#101828",
                  backgroundColor: "#f7f7f7",
                },
              },
            }}
          />
        </DemoContainer>
      </LocalizationProvider>
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
