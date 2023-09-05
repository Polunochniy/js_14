
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


// // function value(arr, pagination, step) {
// //     for(let i = 0; i <= step; i++){
// //         if(i === 0){
// //             console.log('1',arr[i], arr[i+1])
// //         }

// //         else {
// //             console.log('2', arr[(i*pagination)-1], arr[i*pagination])
// //         }
// //     }
// // }


















// // Рандомний генератор масиву
// const getRandomArray = (length, min, max) => {
//     const arr = [];

//     for (let i = 0; i < length; i++) {
//         const randomArray = Math.floor(Math.random() * (max - min + 1)) + min;
//         arr.push(randomArray);
//     }

//     return arr;
// }


// function Pagination(arr, pagination) {
//     const contentDiv = document.getElementById('content');
//     arr.forEach((numberPage) => {
//         const pageLink = document.createElement('a');
//         pageLink.href = '#';
//         pageLink.className = 'page';
//         pageLink.innerText = numberPage;
//         contentDiv.appendChild(pageLink);
//     });

//     const pages = contentDiv.querySelectorAll('.page');
//     const step = Math.ceil(arr.length / pagination);

//     let currentPage = 0;

//     // Функция для переключения страниц
//     function changePage(pageIndex) {
//         currentPage = pageIndex;

//         pages.forEach((page, index) => {
//             if (index >= currentPage * pagination && index < (currentPage + 1) * pagination) {
//                 page.style.display = 'block';
//             } else {
//                 page.style.display = 'none';
//             }
//         });
//     }

//     // Устанавливаем начальную страницу
//     changePage(0);

//     // Создаем навигацию для страниц
//     const navigationDiv = document.createElement('div');
//     navigationDiv.className = 'navigation';

//     // Кнопка "<<" для перехода к первой странице
//     const firstPageButton = document.createElement('button');
//     firstPageButton.innerText = '<<';
//     firstPageButton.addEventListener('click', () => changePage(0));
//     navigationDiv.appendChild(firstPageButton);

//     // Кнопка "<" для перехода на предыдущую страницу
//     const prevPageButton = document.createElement('button');
//     prevPageButton.innerText = '<';
//     prevPageButton.addEventListener('click', () => changePage(currentPage - 1));
//     navigationDiv.appendChild(prevPageButton);

// //     // Создаем кнопки для номеров страниц
//     for (let i = 1; i <= step; i++) {
//         const pageButton = document.createElement('button');
//         pageButton.innerText = i;
//         pageButton.addEventListener('click', () => changePage(i - 1));
//         navigationDiv.appendChild(pageButton);
//     }

//     // Кнопка ">" для перехода на следующую страницу
//     const nextPageButton = document.createElement('button');
//     nextPageButton.innerText = '>';
//     nextPageButton.addEventListener('click', () => changePage(currentPage + 1));
//     navigationDiv.appendChild(nextPageButton);

//     // Кнопка ">>" для перехода к последней странице
//     const lastPageButton = document.createElement('button');
//     lastPageButton.innerText = '>>';
//     lastPageButton.addEventListener('click', () => changePage(step - 1));
//     navigationDiv.appendChild(lastPageButton);

//     // Добавляем навигацию на страницу
//     contentDiv.appendChild(navigationDiv);
// }

// const length = 35;
// const min = 1;
// const max = 35;

// const arr = getRandomArray(length, min, max);

// const pagination = 7;
// const getPagination = new Pagination(arr, pagination);
// const step = Math.ceil(arr.length / pagination);





// // function value(arr, pagination, step) {
// //     for(let i = 0; i <= step; i++){
// //         if(i === 0){
// //             console.log('1',arr[i], arr[i+1])
// //         }

// //         else {
// //             console.log('2', arr[(i*pagination)-1], arr[i*pagination])
// //         }
// //     }
// // }













// //   for( let i = 0; i < steps; i++) {
// //       const firstButton = document.createElement('button')
// //       if(i === 0 ){
// //           firstButton.innerText = '<<'
// //           firstButton.disabled = true
// //           document.getElementById('navigation').append(firstButton)
// //       }
// //       if( i === arr.length - 1 ){
// //           firstButton.innerText = '>>'
// //           document.getElementById('navigation').append(firstButton)
// //       }
// //       arr.slice(2, -1).map(el=> {
// //           firstButton.innerText = '>>'
// //           document.getElementById('navigation').append(firstButton)
// //       })
// //   }





// // Рендом генератор случайного массива +- 40
// // Шаг пагинатора  = 5 элементов на странице

// // function Pagination() {
// //     // items
// //   }
  
// //   // Pagination.prototype
// //   // + Шаг погинатора
// //   // + Максимальное и минимальное значение
// //   // + Степ вперед + степ назад + в самый конец + в самое начало + конкретное значение страницы
  
// //   // 0+(step * pagination) - step*pagination
// //   // << < 1 2 3 4 > >>
  
// //   const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// //   const pagination = 2;
// //   const steps = arr.length / pagination;
  
// //   for( let i = 0; i < steps; i++) {
// //       const firstButton = document.createElement('button')
// //       if(i === 0 ){
// //           firstButton.innerText = '<<'
// //           firstButton.disabled = true
// //           document.getElementById('navigation').append(firstButton)
// //       }
// //       if( i === arr.length - 1 ){
// //           firstButton.innerText = '>>'
// //           document.getElementById('navigation').append(firstButton)
// //       }
// //       arr.slice(2, -1).map(el=> {
// //           firstButton.innerText = '>>'
// //           document.getElementById('navigation').append(firstButton)
// //       })
// //   }