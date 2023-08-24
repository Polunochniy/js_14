

function measureOut(bucketCapacity){ // функція для перевірки ємності відра при наливанні чи виливанні води
    let water = 0; // початкова кількість води в відрі

    return {
        pourWater: function(value) { // наповнюємо відро водою
            if (water + value <= bucketCapacity) { // якщо кількість доданої води у відро буде менше або дорівнювати його літражу, тоді воду у відро можна додати
                water += value; // початкова кількість води у відрі збільшується на налиту кількість води
                return true; // повертаємо true, бо вливання води у відро успішне
            }
            else {
                return false; // якщо кількість води більша за літраж відра, тоді воно переповниться і наливати таку кількість води ми не будемо
            }
        },

        pourOutWater: function(value) { // виливаємо воду з відра
            if (water >= value) { // якщо кількість води у відрі більша або дорівнює тій кількості, яку нам треба відлити, тоді ця операція можлива
                water -= value; // початкова кількість води у відрі зменшується на ту кількість води, яку ми відлили
                return true; // повертаємо true, якщо успішно вилили воду
            }
            else {
                return false; // якщо води, яку треба відлити більше, ніж початкова кількість води у відрі - операція не виконується
            }
        },

        returnWaterValue: function() { // повертає початкову кількість води у відрі. Функція без аргументів, бо вона просто повертає початкову кількість води
            return water; 
        },

        returnBucketCapacity: function() { // повертає початкову ємність відра. Це потрібно для того, щоб при зміні кількості води у відрі, його загально допустимий літраж не змінювався
            return bucketCapacity;
        }
    };
}

const transfusion = (fromWhere, where) => { // функція для переливання води, аргументи якої: fromWhere - відро, з якого переливають, where - куди переливають
    const transfusionVolume = Math.min(fromWhere.returnWaterValue(), where.returnBucketCapacity() - where.returnWaterValue()); // рахуємо скільки води можна перелити
    // функція Math.min - обираємо мінімальне значення між кількістю води у відрі з якого переливаємо і доступною ємністю відра в яке переливаємо
    // у такому випадку найменше значення в transfusionVolume - це максимальна кількість води, яку можна перелити 
    if (fromWhere.pourOutWater(transfusionVolume)) { // перевіряємо чи можна перелити воду з початкового відра, тобто чи вистачає там води для переливання
        where.pourWater(transfusionVolume); // якщо це можливо, тоді в цільове відро ми додаємо необхідну кількість води
    };
}

const firstBucket = measureOut(5)
const secondBucket = measureOut(3)

firstBucket.pourWater(5); //наповнюємо відро 5л
transfusion(firstBucket, secondBucket); // переливаємо з 5л в 3л відро, в 5л залишається 2л
secondBucket.pourOutWater(secondBucket.returnWaterValue()); // виливаємо усю воду з 3л відра, викликаючи метод returnWaterValue
transfusion(firstBucket, secondBucket); // переливаємо з 5л в 3л відро, в 5л залишається 0л, в 3л - 2л
firstBucket.pourWater(5); // знову наповнюємо відро 5л
transfusion(firstBucket, secondBucket); // переливаємо з 5л в 3л відро, в 5л залишається 4л води

console.log("В 5л відрі:", firstBucket.returnWaterValue(), "л води");
console.log("В 3л відрі:", secondBucket.returnWaterValue(), "л води");

