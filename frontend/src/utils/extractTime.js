export function extractTime(dataString) {
  const date = new Date(dataString);
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());

  return `${hours}:${minutes}`;
}

// helper function to pad single digit number with a leading zero
function padZero(number) {
  return number.toString().padStart(2, "0");
}
