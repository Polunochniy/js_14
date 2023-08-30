

class SquareClass {
    constructor(elements) { // створюємо клас, у конструктор якого приймається параметр elements - наші квадрати
        this.elements = elements;
        this.addClickAndColor(); // також викликаємо метод addClick, який буде додавати слухачів та зафарбує обрані квадрати
        this.clickButton(); // викликаємо слухача для кнопки
    }

    addClickAndColor() { // метод кліку та додавання кольору
        this.elements.forEach(square => { // проходимо через кожен квадрат методом forEach
            square.addEventListener('click', () => { // метод addEventListener дозволяє додвати слухачів подій до html, визначає функцію, яка використовуватиметься при події
                // додаємо метод до кожного квадрата, 'click'- тип події (слухач), () - викликана при події функція
                const color = "orange"; // обираємо колір
                square.style.backgroundColor = color; // через властивість style міняємо колір на обраний
            });
        });
    }

    calculate() { // метод прорахунку суми чисел зафарбованих квадратів
        let sum = 0; // змінна для збереження суми чисел

        this.elements.forEach(square => { // проходимось по кожному кадрату і якщо вони помаранчового кольору сумуємо їх
            if (square.style.backgroundColor === "orange") {
                const number = parseInt(square.textContent); // textContent - властивістю отримуємо текстовий вміст квадрата і parseInt переводимо текст в число
                if (!isNaN(number)) { // перевірка чи є число числом
                    sum += number; // якщо є, то додаємо значення до загальної суми
                }
            }
        });

        return sum; // повертаємо суму
    }

    clickButton() { // метод кліку для кнопки
        this.calculateButton = document.getElementById('calculate'); // отримуємо кнопку з html по id
        this.calculateButton.addEventListener('click', () => { // додаємо слухача click
            const sum = this.calculate(); // через клік викликатиметься прорахунок суми квадратів і зберігається у змінній
            console.log(`Сума чисел у зафарбованих квадратах: ${sum}`);
        })
    }
}

const nineSquares = document.querySelectorAll('.square'); // отримуємо усі елементи з класом square і зберігаємо їх у змінній
const instanceOfTheClass = new SquareClass(nineSquares); // створюємо екземпляр класу та зберігаємо у змінній






