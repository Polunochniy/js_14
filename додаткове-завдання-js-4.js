const task = prompt("Введіть назву завдання:");

if (task === "Number: odd") {
    const codetask = `
    const mynumber = prompt("Введіть число: ");

    if (Number(mynumber) === Number(mynumber)){
        if (mynumber % 2 === 0){
            alert("Число - парне.");
        }    
        else {
            alert("Число - не парне.");
        }
    }

    else {
        alert("Введене значення не є числом.");
    }`;
    console.log("Завдання 'Number: odd':");
    console.log(codetask);
}

else if (task === "String: lexics") {
    const codetask = `
    const text = prompt("Введіть текст: ");
    const words = ["блін"];
    let badword = false;

    if (text.indexOf(words) !== -1) {
        badword = true;
    }


    if (badword) {
        alert("Текст містить некоректні слова.");
    }

    else {
        alert("Текст не містить некоректних слів.");
    }`;
    console.log("Завдання 'String: lexics':");
    console.log(codetask);
}

else if (task === "Boolean") {
    const codetask = `
    const yesorno1 = confirm("Ви голодні?");
    const yesorno2 = confirm("Бажаєте десь перекусити?");
    const yesorno3 = confirm("Полюбляєте азіатську кухню?");

    console.log("Ви голодні? " + (yesorno1 ? "Так" : "Ні"));
    console.log("Бажаєте десь перекусити? " + (yesorno2 ? "Так" : "Ні"));
    console.log("Полюбляєте азіатську кухню? " + (yesorno3 ? "Так" : "Ні"));`
    console.log("Завдання 'Boolean':");
    console.log(codetask);
}

else if (task === "Boolean: if") {
    const codetask = `
    const yesorno21 = confirm("Ви голодні?");
    const yesorno22 = confirm("Бажаєте десь перекусити?");
    const yesorno23 = confirm("Полюбляєте азіатську кухню?");

    if (yesorno21) {
        alert("Ви голодні.");
    }
    else {
        alert("Ви не хочете їсти.");
    }

    if (yesorno22) {
        alert("Ви хочете перекусити.");
    }
    else {
        alert("Ви вже поїли вдома.");
    }

    if (yesorno23) {
        alert("Ви прихильник азіатської кухні.");
    }
    else {
        alert("Ви ненавидите азіатську кухню.");
    }`;
    console.log("Завдання 'Boolean: if':");
    console.log(codetask);
}

else if (task === "Comparison: sizes") {
    const codetask = `
    const sizeouterwear = prompt("Введіть свій розмір верхнього одягу за нашою системою розмірів:");

    if (sizeouterwear == 40){
        alert("Ваш розмір верхнього одягу за італійською системою розмірів - 38.")
    }
    if (sizeouterwear == 42){
        alert("Ваш розмір верхнього одягу за італійською системою розмірів - 40.")
    }
    if (sizeouterwear == 44){
        alert("Ваш розмір верхнього одягу за італійською системою розмірів - 42.")
    }
    if (sizeouterwear == 46){
        alert("Ваш розмір верхнього одягу за італійською системою розмірів - 44.")
    }
    if (sizeouterwear == 48){
        alert("Ваш розмір верхнього одягу за італійською системою розмірів - 46.")
    }
    if (sizeouterwear == 50){
        alert("Ваш розмір верхнього одягу за італійською системою розмірів - 48.")
    }
    if (sizeouterwear == 52){
        alert("Ваш розмір верхнього одягу за італійською системою розмірів - 50.")
    }
    if (sizeouterwear == 54){
        alert("Ваш розмір верхнього одягу за італійською системою розмірів - 52.")
    }
    
    const sizeunderwear = prompt("Введіть свій розмір жіночої білизни за нашою системою розмірів:");
    
    if (sizeunderwear == 42){
        alert("Ваш розмір жіночої білизни за міжнародною системою розмірів - XXS.")
    }
    if (sizeunderwear == 44){
        alert("Ваш розмір жіночої білизни за міжнародною системою розмірів - XS.")
    }
    if (sizeunderwear == 46){
        alert("Ваш розмір жіночої білизни за міжнародною системою розмірів - S.")
    }
    if (sizeunderwear == 48){
        alert("Ваш розмір жіночої білизни за міжнародною системою розмірів - M.")
    }
    if (sizeunderwear == 50){
        alert("Ваш розмір жіночої білизни за міжнародною системою розмірів - L.")
    }
    if (sizeunderwear == 52){
        alert("Ваш розмір жіночої білизни за міжнародною системою розмірів - XL.")
    }
    if (sizeunderwear == 54){
        alert("Ваш розмір жіночої білизни за міжнародною системою розмірів - XXL.")
    }
    if (sizeunderwear == 56){
        alert("Ваш розмір жіночої білизни за міжнародною системою розмірів - XXXL.")
    }
    
    const sizesocks = prompt("Введіть свій розмір шкарпеток за нашою системою розмірів:");
    
    if (sizesocks == 21){
        alert("Ваш розмір шкарпеток за американською системою розмірів - 8.")
    }
    if (sizesocks == 22){
        alert("Ваш розмір шкарпеток за американською системою розмірів - 8 1/2.")
    }
    if (sizesocks == 23){
        alert("Ваш розмір шкарпеток за американською системою розмірів - 9.")
    }
    if (sizesocks == 24){
        alert("Ваш розмір шкарпеток за американською системою розмірів - 9 1/2.")
    }
    if (sizesocks == 25){
        alert("Ваш розмір шкарпеток за американською системою розмірів - 10.")
    }
    if (sizesocks == 26){
        alert("Ваш розмір шкарпеток за американською системою розмірів - 10 1/2.")
    }
    if (sizesocks == 27){
        alert("Ваш розмір шкарпеток за американською системою розмірів - 11.")
    }
    
    const sizechild = prompt("Введіть зріст дитини щоб дізнатися обхват грудей, талії та бедер, а також довжину спини:");
    
    if (sizechild == 50){
        alert("Параметри дитини: 40/40/42, довжина спини - 14.5.")
    }
    if (sizechild == 56){
        alert("Параметри дитини: 42/42/44, довжина спини - 16.")
    }
    if (sizechild == 62){
        alert("Параметри дитини: 44/44/46, довжина спини - 17.5.")
    }
    if (sizechild == 68){
        alert("Параметри дитини: 46/46/48, довжина спини - 19.")
    }
    if (sizechild == 74){
        alert("Параметри дитини: 48/47/50, довжина спини - 20.2.")
    }
    if (sizechild == 80){
        alert("Параметри дитини: 50/49/52, довжина спини - 21.4.")
    }
    if (sizechild == 86){
        alert("Параметри дитини: 51.5/50/54, довжина спини - 22.6.")
    }`;
    console.log("Завдання 'Comparison: sizes':");
    console.log(codetask);
}

else if (task === "Ternary") {
    const codetask = `
    const gender = prompt("Якої ви статі? Чоловік чи жінка?");
    const yougender = (gender === "чоловік") ? "Ви чоловік" : "Ви жінка";
    
    alert(yougender)`;
    console.log("Завдання 'Ternary':");
    console.log(codetask);
}

else if (task === "Training") {
    const codetask = `
    // bool type cast
    //!!2 - //true
    //!!0 - //false
    //!!1 - //true
    // or
    //2 || 1 - //2
    //2 || 0 - //2
    //and
    //2 && 1 - //1
    //1 && 2 - //2
    //0 && 2 - //0
    // or and and difference
    //0 || 1 || 2 - //1
    //0 && 1 && 2 - //0
    //2 || 1 || 0 - //2
    //2 && 1 && 0 - //0
    //confirm('left') || confirm('right') - //true
    //confirm('left') && confirm('right') - //false
    //null, undefined, so on
    //null || 2 - //2
    //undefined && 1 - //undefined
    //alert("Hello") && confirm('Are you sexy?'); - //undefined
    //alert("Hello") || confirm('Are you drunk?'); - //true
    //brackets and complex expressions
    //(undefined || 2) && (3 || 0) - //3
    //(2 && 1) || (null && 0) - //1
    //(2 > 1) && "greater" - //"greater"
    //(2 < 1) && null - //false
    //null && (2 < 1) - //null
    // ternary operator
    //1 ? "one" : "not one" - //"one"
    //0 ? "zero" : "not zero" - //"not zero"
    //"0" ? "\"zero\"" : "not "zero"" - //"\"zero\""
    //parseInt("0") ? 'true' : 'false' - //'false'
    //("" || 2) && (3 || "3.5") || (4 && 5) - //3
    //(-1 + 1) && "zero" - //0
    //"-1" + 1 && "oups" - //"oups"
    //(typeof null === 'object') ? "null is object" : "null is null" - //"null is object"
    // ternary && ||
    //Math.random() < 0.5 && 'less' || 'more' - //дивлячись яке число в Math.random, якщо воно <0.5, то отримаємо 'less', якщо >0.5 - тоді 'more'
    //(a = Math.random()) < 0.5 && 'less: '+a || 'more: '+a - //якщо число в Math.random < 0.5, то буде 'less: '+це число, якщо Math.random > 0.5 - тоді буде 'more: '+це число
    //in for array
    //[2,3,5,7,11].indexOf(7) > -1 ? 'prime' : 'not found' - //'prime'`;
    console.log("Завдання 'Training':");
    console.log(codetask);
}

else if (task === "Prompt: or") {
    const codetask = `
    const age = prompt("Введіть свій вік.");

    alert(age)`;
    console.log("Завдання 'Prompt: or':");
    console.log(codetask);
}

else if (task === "Confirm: or this days") {
    const codetask = `
    const shop = confirm("Шопінг?") ? "Го" : "ти-бяка";

    alert(shop)`;
    console.log("Завдання 'Confirm: or this days':");
    console.log(codetask);
}

else if (task === "Confirm: if this days") {
    const codetask = `
    const shop1 = confirm("Шопінг?");

    if (shop1) {
        alert("Го");
    }
    else {
        alert("ти-бяка");
    }`;
    console.log("Завдання 'Confirm: if this days':");
    console.log(codetask);
}

else if (task === "Default: or") {
    const codetask = `
    const firstname = prompt("Введіть ім'я:") || "Петро";
    const lastname = prompt("Введіть прізвище:") || "Іванов";
    const middlename = prompt("Введіть по-батькові") || "Васильович";
    
    console.log("Ім'я:", firstname);
    console.log("Прізвище:", lastname);
    console.log("По-батькові:", middlename);`;
    console.log("Завдання 'Default: or':");
    console.log(codetask);
}

else if (task === "Default: if") {
    const codetask = `
    const firstname1 = prompt("Введіть ім'я:");
    const lastname1 = prompt("Введіть прізвище:");
    const middlename1 = prompt("Введіть по-батькові");
    
    if (firstname1) {
        console.log("Ім'я:", firstname1);
    }
    else {
        console.log("Ім'я:", "Петро");
    }
    
    if (lastname1) {
        console.log("Прізвище:", lastname1);
    }
    else {
        console.log("Прізвище:", "Іванов");
    }
    
    if (middlename1) {
        console.log("По-батькові:", middlename1);
    }
    else {
        console.log("По-батькові:", "Васильович");
    }`;
    console.log("Завдання 'Default: if':");
    console.log(codetask);
}

else if (task === "Login and password") {
    const codetask = `
    const log = prompt("Введіть логін:");

    if (log === "admin") {
        const password = prompt("Логін вірний, вітаємо! Тепер введіть пароль:");
    
        if (password === "qwerty") {
            alert("Пароль вірний.")
        }
        else {
            alert("Помилковий пароль.")
        }
    }
    
    else {
        alert("Невірний логін.")
    }`;
    console.log("Завдання 'Login and password':");
    console.log(codetask);
}

else if (task === "Currency exchange") {
    const codetask = `
    const currency = prompt("Введіть валюту (наприклад, usd, eur, pln, try):");
    const buy = confirm("Ви бажаєте придбати валюту?");
    
    let rate;
    
    if (currency.toUpperCase() === "USD") {
        rate = buy ? 36.7 : 37.35;
    }
    else if (currency.toUpperCase() === "EUR") {
        rate = buy ? 40.5 : 41.15;
        }
    else if (currency.toUpperCase() === "PLN") {
        rate = buy ? 8.9 : 9.2;
        }
    else if (currency.toUpperCase() === "TRY") {
        rate = buy ? 1.41 : 1.8;
        }
    
    else {
    alert("Назва валюти невірна.");
    }
    
    if (rate) {
        const sum = prompt("Введіть суму для обміну:");
        const resultsum = buy ? sum * rate : sum / rate;
        alert(resultsum);
    }`;
    console.log("Завдання 'Currency exchange':");
    console.log(codetask);
}

else if (task === "Scissors") {
    const codetask = `
    const game = prompt("Давайте зіграємо! Введіть камінь, ножиці або папір:");

    let program = Math.random();
    if (program < 0.70) {
        program = "ножиці";
    }
    else if (program < 0.80) {
        program = "камінь";
    }
    else {
        program = "папір";
    }
    
    alert("Хід комп'ютера: " + program);
    
    if (
        (game === "ножиці" && program === "папір") ||
        (game === "папір" && program === "камінь") ||
        (game === "камінь" && program === "ножиці")
    ) {
        alert("Вітаємо! Ви перемогли!");
    }
    
    else if (game === program) {
        alert("Нічия");
    }
    
    else {
        alert("Ви програли(");
    }`;
    console.log("Завдання 'Scissors':");
    console.log(codetask);
}

else if (task === "Завдання на чорний пояс") {
    const codetask = `
    const game1 = prompt("Давайте зіграємо! Введіть камінь, ножиці або папір:");
    let program1 = Math.random() < 0.70 ? "ножиці" : Math.random() < 0.80 ? "камінь" : "папір";
    
    alert("Хід комп'ютера: " + program);
    
    const youwin = (game1 === "ножиці" && program1 === "папір") || (game1 === "папір" && program1 === "камінь") || (game1 === "камінь" && program1 === "ножиці");
    
    const resultgame = youwin ? "Вітаємо! Ви перемогли!" : game1 === program1 ? "Нічия" : "Ви програли(";
    alert(resultgame);`;
    console.log("Завдання 'Завдання на чорний пояс':");
    console.log(codetask); 
}

else {
    alert("Невідоме завдання");
}