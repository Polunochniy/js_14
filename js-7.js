//Temperature

const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;

const celsius = 15;
const fahrenheit = celsiusToFahrenheit(celsius);
alert("Температура у Фаренгейтах: " + fahrenheit);

const valueFahrenheit = 60;
const valueCelsius = fahrenheitToCelsius(valueFahrenheit);
alert("Температура у Цельсіях: " + valueCelsius);




//RGB

const decimalToHex = decimal => {
    let hex = decimal.toString(16);
    return hex.length < 2 ? '0' + hex : hex;
};
 
const rgbToHex = (r, g, b) => {
    const red = isNaN(r) ? 0 : parseInt(r);
    const green = isNaN(g) ? 0 : parseInt(g);
    const blue = isNaN(b) ? 0 : parseInt(b);
    const hexColor = '#' + decimalToHex(red) + decimalToHex(green) + decimalToHex(blue);
    return hexColor;
};

const red = parseInt(prompt("Enter a value for red:"));
const green = parseInt(prompt("Enter a value for green:"));
const blue = parseInt(prompt("Enter a value for blue:"));

const hexColor = rgbToHex(red, green, blue);
alert("CSS-color: " + hexColor);





