function getCardDetails(listVariant, card) {
  const details = [];

  if (listVariant === "short") {
    if (card.adults > 0) details.push(`${card.adults} adults, adults`);
    if (card.transmission === "automatic") details.push(`Automatic, automatic`);
    if (card.engine === "petrol") details.push(`Petrol, petrol`);
    if (card.details.kitchen > 0) details.push(`Kitchen, kitchen`);
    if (card.details.beds > 0) details.push(`${card.details.beds} beds, beds`);
    if (card.details.airConditioner > 0) details.push(`AC, AC`);
    return details;
  }

  if (card.adults > 0) details.push(`${card.adults} adults, adults`);
  if (card.transmission === "automatic") details.push(`Automatic, automatic`);
  if (card.details.airConditioner > 0) details.push(`AC, AC`);
  if (card.engine === "petrol") details.push(`Petrol, petrol`);
  if (card.details.kitchen > 0) details.push(`kitchen, kitchen`);
  if (card.details.beds > 0) details.push(`${card.details.beds} beds, beds`);
  if (card.details.airConditioner > 0)
    details.push(
      `${card.details.airConditioner} air conditioner, airConditioner`
    );
  if (card.details.CD > 0) details.push(`CD, CD`);
  if (card.details.radio > 0) details.push(`Radio, radio`);
  if (card.details.hob > 0) details.push(`${card.details.hob} hob, hob`);
  if (card.details.toilet > 0) details.push(`Toilet, toilet`);
  if (card.details.shower > 0) details.push(`Shower, shower`);
  if (card.details.freezer > 0) details.push(`Freezer, freezer`);
  if (card.details.gas) details.push(`Gas, gas`);
  if (card.details.water) details.push(`Water, water`);
  if (card.details.microwave > 0) details.push(`Microwave, microwave`);

  return details;
}

export default getCardDetails;
