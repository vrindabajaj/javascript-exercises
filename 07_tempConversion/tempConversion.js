const convertToCelsius = function(fahrenheitVal) {
  let celsiusVal = (fahrenheitVal - 32) * (5/9);
  return Math.round(celsiusVal * 10) / 10;
};

const convertToFahrenheit = function(celsiusVal) {
  let fahrenheitVal = (celsiusVal * (9/5)) + 32;
  return Math.round(fahrenheitVal * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
