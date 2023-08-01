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




//Flats

const totalFloors = parseInt(prompt("Enter the number of floors in the building:"));
const apartmentsPerFloor = parseInt(prompt("Enter the number of apartments on the floor:"));
const apartmentNumber = parseInt(prompt("Enter apartment number:"));

function calculateApartmentFloor() {
    const apartmentsPerEntrance = totalFloors * apartmentsPerFloor;
    const entranceNumber = Math.ceil(apartmentNumber / apartmentsPerEntrance);
    const floorNumber = Math.ceil((apartmentNumber % apartmentsPerEntrance) / apartmentsPerFloor);
    return {entrance: entranceNumber, floor: floorNumber};
}

const result = calculateApartmentFloor();
alert(`Apartment ${apartmentNumber} located on the ${result.floor} floor of the ${result.entrance} entrance.`);




//Credentials

const capitalize = str => {
    return str.trim().slice(0, 1).toUpperCase() + str.trim().slice(1).toLowerCase();
};

const user = () => {
    let firstName = prompt("Введіть ім'я:");
    let lastName = prompt("Введіть прізвище:");
    let middleName = prompt("Введіть по батькові:");

    const name = capitalize(firstName);
    const surname = capitalize(lastName);
    const fatherName = capitalize(middleName);
    const fullName = surname + " " + name + " " + fatherName;

    return {name, surname, fatherName, fullName};
}

const result2 = user();
alert("Вітаю, " + result2.fullName + "!");




//New line

const line = str1 => {
    return str1.split ("\\n").join("\n");
}

let string = prompt("Введіть рядок, використовуючи \\n як маркер для переходу на новий рядок.");
const result3 = line(string);
alert(result3);




//Prompt OR

const promptOr = (string1, value) => prompt(string1) || value;
const age = promptOr("Введіть свій вік: ", "26");

alert(age)




//Login And Password

const trueLog = "admin";
const truePassword = "qwerty";

const loginAndPassword = (trueLog, truePassword) => {
    const log = prompt("Введіть логін:");

    if (log === trueLog) {
        const password = prompt("Логін вірний, вітаємо! Тепер введіть пароль:");

        if (password === truePassword) {
            alert("Пароль вірний.")
            return true;
        }
        else {
            alert("Помилковий пароль.")
            return false;
        }
    }

    else {
        alert("Невірний логін.")
        return false;
    }
};

const result4 = loginAndPassword(trueLog, truePassword);
console.log(result4);




//For Table

const forTable = (arrWithArr) => {
    let html = "<table>";

    for (const i in arrWithArr) {
        const row = arrWithArr[i];
        const color = i % 2 === 0 ? "blue" : "red";

        html += '<tr style="background-color: ' + color + '">';
    
        for (const cell of row) {
            html += "<td>";
            html += cell;
            html += "</td>";
        }
    
        html += "</tr>";
    }
    
    html += "</table>";
    return html;
};

const arr19 = [
    [0, 0, 0, 0, 0],
    [0, 1, 2, 3, 4],
    [0, 2, 4, 6, 8],
    [0, 3, 6, 9, 12],
    [0, 4, 8, 12, 16]
];

const result5 = forTable(arr19);
document.write(result5);




//Filter Lexics

const filter = () => {
    const row4 = prompt("Введіть рядок:");
    const splitrow = row4.split(" ");
    const badWords = ["пипець", "блін", "скотина"];

    const row5 = splitrow.filter(word1 => !badWords.filter(badWords => badWords === word1).length);
    return row5.join(" ");
}

const result6 = filter();
console.log(result6);




// Currency Table - НЕ ЗРОБИЛА МИНУЛЕ ЗАВДАННЯ




//Form

const createForm = obj => {
    let form = "<form>";

    for (const key in obj) {
        if (car.hasOwnProperty(key)) {
            const value = obj[key];
            const inputType = typeof value === "boolean" ? "checkbox" : "text";
            form += `<label>${key}: <input type="${inputType}" value="${value}"/></label>`;
        }
    }

    form += "</form>";
    return form;
}

const car = {
    "Name":"chevrolet chevelle malibu",
    "Cylinders":8,
    "Displacement":307,
    "Horsepower":130,
    "Weight_in_lbs":3504,
    "Origin":"USA",
    "in_production": false
};

const formHTML = createForm(car);
document.body.innerHTML = formHTML;




