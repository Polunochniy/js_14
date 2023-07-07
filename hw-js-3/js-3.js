
//String: greeting

let name = prompt("Введіть ваше ім'я:");
alert("Вітаю, " + name + "!");




//String: gopni4ek

let str = prompt("Введіть рядок без блін:");
let line = str.split(",").join(" блін, ");
alert("Ваш рядок: " + line);




//String: capitalize

let str2 = "cANBerRa"
let result = str2.slice(0, 1).toUpperCase() + str2.slice(1).toLowerCase();
console.log(result) //Canberra



//String: word count

let str3 = prompt("Введіть рядок:");
let words = str3.split(' ');
let length = words.length;
let stringlength = str3.length;

console.log("Довжина рядка: " + stringlength);
console.log("Довжина масиву слів: " + length);



//String: credentials

let firstName = prompt("Введіть ім'я:");
let lastName = prompt("Введіть прізвище:");
let middleName = prompt("Введіть по батькові:");

let firstNametrim = firstName.trim ();
let lastNametrim = lastName.trim ();
let middleNametrim = middleName.trim ();

let firstNameresult = firstNametrim.slice(0, 1).toUpperCase() + firstNametrim.slice(1).toLowerCase();
let lastNametrimresult = lastNametrim.slice(0, 1).toUpperCase() + lastNametrim.slice(1).toLowerCase();
let middleNametrimresult = middleNametrim.slice(0, 1).toUpperCase() + middleNametrim.slice(1).toLowerCase();

let fullName = lastNametrimresult + " " + firstNameresult + " " + middleNametrimresult;
alert("Вітаю, " + fullName + "!");



//String: beer!!!!

let str4 = "Було жарко. Василь пив пиво вприкуску з креветками";
let minusword = str4.split(" ");

let resultbeer = minusword.map(word => {
    if (word === "пиво") {
      return "чай";
    }
    return word;
  }).join(" ");

console.log(resultbeer) //"Було жарко. Василь пив чай уприкуску з креветками"



//String: no tag

let str5 = "якийсь текст, в якому є один тег <br /> і всяке інше"
let tagstart = str5.indexOf("<");
let tagend = str5.indexOf(">") + 2;

let resultnotag = str5.slice(0, tagstart) + str5.slice(tagend);

console.log(resultnotag) //якийсь текст, в якому є один тег і всяке інше



//String: big tag

let str6 = "якийсь текст у якому є один тег <br /> і всяке інше"
let tagstart2 = str6.indexOf("<");
let tagend2 = str6.indexOf(">") + 2;

let resulttagupper = str6.slice(0, tagstart2) + str6.slice(tagstart2, tagend2).toUpperCase() + str6.slice(tagend2);

console.log(resulttagupper) //якийсь текст, в якому є один тег <BR /> і всяке інше



//String: new line

let str7 = prompt("Введіть рядок, використовуючи \\n як маркер для переходу на новий рядок.");
let newline = str7.split ("\\n").join("\n");

alert(newline);



//String: youtube

const str8 = prompt("Введіть текст із посиланням на відео з YouTube.");
const regex = /youtube\.com\/watch\?v=([^&]+)/;
const newmatch = str8.match(regex);
let htmlcode = "";

if (newmatch) {
    const video = newmatch[1];
    htmlcode = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${video}"></iframe>`;
}

document.write(htmlcode);



