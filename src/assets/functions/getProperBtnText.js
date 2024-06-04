function getProperBtnText(text) {
  if (text === "TV" || text === "AC") {
    return text;
  }

  if (text === "shower") {
    return "Shower/WC";
  }

  if (text === "fullyIntegrated") {
    return "Fully Integrated";
  }

  return text.charAt(0).toUpperCase() + text.slice(1);
}

export default getProperBtnText;
