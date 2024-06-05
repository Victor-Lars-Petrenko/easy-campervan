export function separateNumberAndLetter(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (i > 0 && isDigit(str[i - 1]) && isLetter(str[i])) {
      result += " ";
    }
    result += str[i];
  }
  return result;
}

function isDigit(char) {
  return char >= "0" && char <= "9";
}

function isLetter(char) {
  return (char >= "a" && char <= "z") || (char >= "A" && char <= "Z");
}

export function capitalizeWords(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === char.toUpperCase() && i !== 0) {
      result += " " + char.toLowerCase();
    } else {
      result += char.toLowerCase();
    }
  }

  result = result.charAt(0).toUpperCase() + result.slice(1);

  return result;
}
