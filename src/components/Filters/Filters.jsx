import { useState } from "react";

import Button from "components/Button";
import CustomInput from "./CustomInput";

import { iconArrCheckbox, iconArrRadio } from "assets/items/iconFormItems";

import sprite from "../../assets/images/icons.svg";

import css from "./Filters.module.css";

const Filters = () => {
  const initialState = {
    location: "",
    camperEquipment: "",
    camperType: "",
  };

  const [filtersState, setFiltersState] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFiltersState({ ...filtersState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(filtersState);
  };

  return (
    <form onSubmit={handleSubmit} className={css.filtersForm}>
      <label className={css.labelInputLocation} htmlFor="location-input">
        Location
      </label>
      <div className={css.locationInputWrap}>
        <input
          id="location-input"
          type="text"
          name="location"
          placeholder="City"
          onChange={handleChange}
          className={css.inputLocation}
        />
        <svg className={css.inputIcon}>
          <use href={`${sprite}#icon-map-pin`} />
        </svg>
      </div>
      <h4 className={css.filtersHeading}>Filters</h4>
      <CustomInput
        text="Vehicle equipment"
        inputType="checkbox"
        inputName="camperEquipment"
        iconArr={iconArrCheckbox}
        isChecked={filtersState.camperEquipment}
        handleChange={handleChange}
      />
      <CustomInput
        text="Vehicle type"
        inputType="radio"
        inputName="camperType"
        iconArr={iconArrRadio}
        isChecked={filtersState.camperType}
        handleChange={handleChange}
      />
      <Button type="submit" text="Search" btnStyle="submitBtn" />
    </form>
  );
};

export default Filters;
