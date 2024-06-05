import { useState } from "react";
import { useDispatch } from "react-redux";

import Button from "components/Button";
import CustomInput from "./CustomInput";

import { iconArrCheckbox, iconArrRadio } from "assets/items/iconFormItems";
import { setFilter } from "../../redux/filter/filter-actions";

import sprite from "../../assets/images/icons.svg";

import css from "./Filters.module.css";

const Filters = () => {
  const initialState = {
    location: "",
    camperEquipment: [],
    camperType: "",
  };

  const [filtersState, setFiltersState] = useState({ ...initialState });
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const { name, value, type, checked } = target;

    if (type === "checkbox") {
      setFiltersState(prevState => {
        const newArray = checked
          ? [...prevState[name], value]
          : prevState[name].filter(item => item !== value);
        return { ...prevState, [name]: newArray };
      });
    } else {
      setFiltersState({ ...filtersState, [name]: value });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(filtersState);
    dispatch(setFilter(filtersState));
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
