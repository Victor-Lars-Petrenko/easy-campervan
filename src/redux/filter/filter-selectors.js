import { createSelector } from "@reduxjs/toolkit";
import { selectCampers } from "../campers/campers-selectors";

const selectFilter = state => state.filter;

export const selectFilteredCampers = createSelector(
  [selectFilter, selectCampers],
  (filter, campers) => {
    const { location, camperEquipment, camperType } = filter;

    let filteredCampers = campers;

    const normalizedLocation = location.trim().toLowerCase();
    if (normalizedLocation) {
      filteredCampers = filteredCampers.filter(camper =>
        camper.location.toLowerCase().includes(normalizedLocation)
      );
    }

    if (camperEquipment.length > 0) {
      filteredCampers = filteredCampers.filter(
        ({
          transmission,
          details: { airConditioner, kitchen, TV, bathroom, toilet },
        }) => {
          if (camperEquipment.AC && airConditioner < 1) {
            return false;
          }
          if (camperEquipment.automatic && transmission !== "automatic") {
            return false;
          }
          if (camperEquipment.kitchen && kitchen < 1) {
            return false;
          }
          if (camperEquipment.TV && TV < 1) {
            return false;
          }
          if (camperEquipment.shower && bathroom < 1 && toilet < 1) {
            return false;
          }

          return true;
        }
      );
    }

    if (camperType) {
      filteredCampers = filteredCampers.filter(
        camper => camper.form === camperType
      );
    }

    return filteredCampers;
  }
);

export default selectFilter;
