// Квартира в ней комнаты - в каждой комнате ширина и длинна => вернуть площадь квартиры

const areaOfTheRooms = (rooms) => {
    let area = 0;
    for (const room of rooms) {
        area += room.width * room.length;
    }
    return area
}

const room1 = {
    width: 7,
    length: 9
}

const room2 = {
    width: 10,
    length: 4
}

const room3 = {
    width: 6,
    length: 6
}


const rooms = [room1, room2, room3];
const areaOfTheApartment = areaOfTheRooms(rooms);
console.log("Загальна площа квартири:", areaOfTheApartment)




// PROMPT и ты вводишь слово => найти сколько гласных и согласных букв 

const vowelsAndConsonants = () => {
    const vowels = /[аеєиіїоуюяАЕЄИІЇОУЮЯ]/g;
    const consonants = /[бвгджзйклмнпрстфхцчшщБВГДЖЗЙКЛМНПРСТФХЦЧШЩ]/g;

    const word = prompt("Введіть слово: ");

    const numberOfVowels = (word.match(vowels) || []).length;
    const numberOfConsonants = (word.match(consonants) || []).length;

    console.log("Кількість голосних букв:", numberOfVowels);
    console.log("Кількість приголосних букв:", numberOfConsonants);
}

vowelsAndConsonants();




// Инпут в HTML => вводим имейл и проверяем его на валидность => проверяем на наличие @ .com / .ua / .ru




// К примеру в вас есть кофе (1кг, 2кг) => задача сделать функцию,// запытаете зерна - ставите помол (грамм за порцию) и считаете кол-во чашек

const coffeeCups = (weight, grind, grainWeightPerServing) => {
    const quantityCoffeeCups = Math.floor((weight * 1000) / (grind * grainWeightPerServing));
    return quantityCoffeeCups;
};

const weightOfCoffeeKG = 2;
const grinding = 4;
const grainWeightPerServing = 13;

const cups = coffeeCups(weightOfCoffeeKG, grinding, grainWeightPerServing);
console.log("Кількість чашок з кавою:", cups);




// У вас есть дистанция и длинна шага => покажите за сколько мы ее пройдем и ответ должен быть вы прошли за (0 часов 12 минут 10 секунд)

const walkingTime = (distanceInMeters, stepLengthInMeters) => {
    const steps = distanceInMeters / stepLengthInMeters;
    const timeStep = steps * 0.6;

    const timeStepInHours = Math.floor(timeStep / 3600);
    const timeStepInMinutes = Math.floor((timeStep % 3600) / 60);
    const timeStepInSeconds = Math.floor(timeStep % 60);

    return `Ви пройшли за ${timeStepInHours} години ${timeStepInMinutes} хвилин ${timeStepInSeconds} секунд.`
}

const distanceInMeters = 7000;
const stepLengthInMeters = 0.4;

const allWalkingTime = walkingTime(distanceInMeters, stepLengthInMeters);
console.log(allWalkingTime);




// У вас телефон с памятью в ГБ - и при вызове функции вы передаете массив с данными(в МБ) по типу [0.2, 5.5, 2.3] 
//=>показать сколько осталось памяти

const remainingMemory = (memoryInGB, dataOnThePhone) => {
    const memoryInMB = memoryInGB * 1024;
    let usedMemoryInMB = 0;

    for (const usage of dataOnThePhone) {
        usedMemoryInMB += usage;
    }

    const freeMemoryMB = memoryInMB - usedMemoryInMB;
    return `Вільної пам'яті у телефоні залишилося: ${freeMemoryMB} МБ`
}

const memoryCard = 128;
const dataOnThePhone = [8.7, 3.1, 4.0]

const result = remainingMemory(memoryCard, dataOnThePhone);
console.log(result);

