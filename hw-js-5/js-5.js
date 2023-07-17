//Confirms

let arr = [confirm("Ви жінка?"), confirm("Вам більше 20 років?"), confirm("Ви працюєте?")];

console.log(arr);



//Prompts

let arr1 = [];
arr1[0] = prompt("Як ваші справи?");
arr1[1] = prompt("Що нового?");
arr1[2] = prompt("Ви задоволені?");

console.log(arr1);



//Item access

let index = prompt("Введіть індекс у масиві:");
let arr2 = [1, 2, 3, 4, 5];
let value = arr2[index];

console.log("Значення елемента:", value);
console.log("Довжина масиву:", arr2.length);



//Item change

let index1 = prompt("Введіть індекс у масиві:");
let value1 = prompt("Введіть значення у масиві:");

let arr3 = [1, 2, 3, 4, 5];
arr3[index1] = value1;

console.log(arr3);



//Multiply table

const arr4 = [
    [0, 0, 0, 0, 0],
    [0, 1, 2, 3, 4],
    [0, 2, 4, 6, 8],
    [0, 3, 6, 9, 12],
    [0, 4, 8, 12, 16]
];
console.log(arr4);



//Multiply table slice

const arr5 = [
    [0, 0, 0, 0, 0],
    [0, 1, 2, 3, 4],
    [0, 2, 4, 6, 8],
    [0, 3, 6, 9, 12],
    [0, 4, 8, 12, 16]
];

const result = arr5.slice(1).map(zero => zero.slice(1));
console.log(result);



//IndexOf Word

const words = prompt("Введіть кілька слів у рядок.");
const myword = prompt("Введіть потрібне слово.");
const split = words.split(" ");
const search = split.indexOf(myword);

if (search === -1) {
    alert(`Слово "${myword}" не знайдено.`);
}
else {
    alert(`Слово "${myword}" знайдено.`);
}



//Reverse

let arr6 = [];
arr6.push(prompt("Введіть 1 елемент:"));
arr6.push(prompt("Введіть 2 елемент:"));
arr6.push(prompt("Введіть 3 елемент:"));
arr6.push(prompt("Введіть 4 елемент:"));
arr6.push(prompt("Введіть 5 елемент:"));

let arr7 = [];
arr7.push(arr6.pop());
arr7.push(arr6.pop());
arr7.push(arr6.pop());
arr7.push(arr6.pop());
arr7.push(arr6.pop());

console.log("Реверс масив:", arr7);



//Reverse 2

let arr8 = [];
arr8.push(prompt("Введіть 1 елемент:"));
arr8.push(prompt("Введіть 2 елемент:"));
arr8.push(prompt("Введіть 3 елемент:"));
arr8.push(prompt("Введіть 4 елемент:"));
arr8.push(prompt("Введіть 5 елемент:"));

let arr9 = [];
arr9.push(arr8.pop());
arr9.push(arr8.pop());
arr9.push(arr8.pop());
arr9.push(arr8.pop());
arr9.push(arr8.pop());

let arr10 = [];
arr10.unshift(arr9.pop());
arr10.unshift(arr9.pop());
arr10.unshift(arr9.pop());
arr10.unshift(arr9.pop());
arr10.unshift(arr9.pop());

console.log("Реверс масив:", arr10);



//Copy

const arr11 = arr4[0].slice();
console.log(arr11);



//Deep Copy

const arr12 = [...arr4];
console.log(arr12);



//Array Equals

const arr13 = [1, 2, 3];
const arr14 = arr13;
arr14 === arr13;
console.log(arr14);



//Flat

const arr15 = [
    [0, 0, 0, 0, 0],
    [0, 1, 2, 3, 4],
    [0, 2, 4, 6, 8],
    [0, 3, 6, 9, 12],
    [0, 4, 8, 12, 16]
];

const arr16 = arr15.flat();
console.log(arr16);
console.log(arr16.length);



//Destruct

const row1 = prompt("Введіть рядок:");
const [first, , , , fifth, , , , ninth] = row1;
console.log("Перша літера:", first);
console.log("П'ята літера:", fifth);
console.log("Дев'ята літера:", ninth);



//Destruct default

const row2 = prompt("Введіть рядок:");
const [ , second, , fourth, fifth1] = row2;
console.log("Друга літера:", second || '!');
console.log("Четверта літера:", fourth || '!');
console.log("П'ята літера:", fifth1 || '!');



//Multiply table rest

const arr18 = [
    [0, 0, 0, 0, 0],
    [0, 1, 2, 3, 4],
    [0, 2, 4, 6, 8],
    [0, 3, 6, 9, 12],
    [0, 4, 8, 12, 16]
];

const [, ...result2] = arr18.map(([ , ...rest]) => rest);
const finish = [...result2.flat()];
console.log(finish);



//For Alert

const names = ["John", "Paul", "George", "Ringo"];
for (const name of names) {
    alert(`Hello, ${name}`)
}



//For Select Option

const currencies = ["USD", "EUR", "GBP", "UAH"];
let str = "<select>";

for (const currency of currencies) {
    str += `<option>${currency}</option>`;
}
str+= "</select>"
document.write(str)



//For Table Horizontal

const names1 = ["John", "Paul", "George", "Ringo"];
let str1 = "<table>";

str1 += "<tr>";
for (const name1 of names1) {
  str1 += `<td>${name1}</td>`;
}
str1 += "</tr>";

str1 += "</table>";
document.write(str1);



//For Table Vertical

const names2 = ["John", "Paul", "George", "Ringo"];
let str2 = "<table>";

for (const name2 of names2) {
    str2 += "<tr>";
    str2 += `<td>${name2}</td>`;
    str2 += "</tr>";
}

str2 += "</table>";
document.write(str2);



//For Table Letters

const currencies1 = ["USD", "EUR", "GBP", "UAH"];
let   str3 = "<table>";
for (const currency1 of currencies1){
    str3 += "<tr>";
    console.log(currency1);
    for (const letter of currency1){
        str3 += "<td>";
        str3 += letter;
        str3 += "</td>";
        console.log(letter);
    }
    str3 += "</tr>";
}
str3+= "</table>";
document.write(str3);



//For Multiply Table

const arr19 = [
    [0, 0, 0, 0, 0],
    [0, 1, 2, 3, 4],
    [0, 2, 4, 6, 8],
    [0, 3, 6, 9, 12],
    [0, 4, 8, 12, 16]
];
document.write("<table>");

for (const i in arr19) {
    const arr20 = arr19[i];
    const color = i % 2 === 0 ? "blue" : "red";

    document.write('<tr style="background-color: ' + color + '">');
  
    for (const arr21 of arr20) {
      document.write("<td>");
      document.write(arr21);
      document.write("</td>");
    }
  
    document.write("</tr>");
}
  
document.write("</table>");



//Function Capitalize

const capitalize = str4 => {
    let result = str4.slice(0, 1).toUpperCase() + str4.slice(1).toLowerCase();
    return result
}
console.log(capitalize("cANBerRa")) //Canberra



//Map Capitalize

const row3 = prompt("Введіть рядок:");
const splitrow = row3.split(" ");
const capitalized = splitrow.map(word => {
    if (word.length > 0) {
       return word[0].toUpperCase() + word.slice(1); 
    }
    return word;
});
const result1 = capitalized.join(" ");
console.log(result1);



//Filter Lexics

const row4 = prompt("Введіть рядок:");
const splitrow1 = row4.split(" ");
const badwords = ["пипець", "блін", "скотина"];
const row5 = splitrow1.filter(word1 => !badwords.filter(badwords => badwords === word1).length);
const result3 = row5.join(" ");

console.log(result3);



//Beep Lexics

const row6 = prompt("Введіть рядок:");
const splitrow2 = row6.split(" ");
const badwords2 = ["пипець", "блін", "скотина"];
const row7 = splitrow2.map(word2 => {
    if (badwords2.indexOf(word2) !== -1) {
      return "BEEP";
    }
    else {
      return word2;
    }
});
const result4 = row7.join(" ");
console.log(result4);



//Reduce HTML


const currenciescopy = ["USD", "EUR", "GBP", "UAH"];
let strcopy = "<select>";
strcopy += currenciescopy.reduce( (a, b) => a + `<option>${b}</option>`, "");
strcopy += "</select>";
document.write(strcopy);



//For Brackets Hell Check

const line = prompt("Введіть рядок з будь-якими парними дужками:");
const bracketsStack = [];
let i = 0;

for (const character of line) {
    if (!/[\[\](){}]/.test(character)) {
        i++;
        continue;
    }

    if (character === "[" || character === "(" || character === "{") {
        bracketsStack.push({ character, index: i });
    }
    else {
        if (bracketsStack.length === 0) {
        console.log(`Помилка ${i}`);
        break;
        }

    const lastbracket = bracketsStack.pop().character;
    if (
      (character === "]" && lastbracket !== "[") ||
      (character === ")" && lastbracket !== "(") ||
      (character === "}" && lastbracket !== "{")
    ) {
      console.log(`Помилка ${i}`);
      break;
    }
  }

  i++;
};

if (bracketsStack.length !== 0) {
  console.log(`Помилка ${bracketsStack.pop().index}`);
} else {
  console.log("Усе правильно");
};









