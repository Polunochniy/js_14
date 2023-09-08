
const getRandomArray = (length, min, max) => {
    const arr = [];

    for (let i = 0; i < length; i++) {
        const randomArray = Math.floor(Math.random() * (max - min + 1)) + min;
        arr.push(randomArray);
    }

    return arr;
}

const length = 30;
const min = 1;
const max = 30;

const arr = getRandomArray(length, min, max);
const pagination = 5;

function Pagination(arr, pagination) {
    const steps = Math.ceil(arr.length / pagination);
    const navigationDiv = document.getElementById('navigation');

    for (let i = 0; i < steps; i++) {
        const stepStart = i * pagination;
        const stepEnd = stepStart + pagination;
        const pageButton = document.createElement('button');

        if (i === 0) {
            pageButton.innerText = '<<';
            pageButton.disabled = true;
        } else if (i === steps - 1) {
            pageButton.innerText = '>>';
        } else {
            pageButton.innerText = i;
        }

        pageButton.addEventListener('click', () => {
            const currentPage = i;
            const pageItems = arr.slice(stepStart, stepEnd);
            console.log(`Сторінка ${currentPage}:`, pageItems);
        });

        navigationDiv.appendChild(pageButton);
    }
}

Pagination(arr, pagination);


