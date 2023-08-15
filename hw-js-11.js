//while confirm

let whileConfirm = false;
while (!whileConfirm) {
    whileConfirm = confirm('Замовте послугу у нас!');
    if (whileConfirm) {
        alert('Дякую що здалися і все ж таки замовили у нас послугу)');
    }
};




//array fill

const arr = [];
while (true) {
    let line = prompt("Введіть рядок:")
    if (line === null) {
        break;
    }

    arr.push(line);
};




//array fill nopush

const arr2 = [];
let index = 0;
while (true) {
    let line2 = prompt("Введіть рядок до другого завдання:")
    if (line2 === null) {
        break;
    }

    arr2[index] = line2;
    index++;
};




//infinite probability

let iteration = 0;
while (true) {
    iteration++;
    if (Math.random() > 0.9) {
        break;
    }
}
alert(`Кількість ітерацій: ${iteration}`);




//empty loop

while (true) {
    const emptyLoop = prompt("Замовте послугу у нас!");
    if (emptyLoop === null) {
        continue
    }
    else {
        break
    }
};




//progression sum





//chess one line





