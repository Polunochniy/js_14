// // Рекурсія: HTML tree

// function htmlTree(data) {
//     let htmlString = '';

//     if (data.tagName) {
//         htmlString += `<${data.tagName}`;

//         if (data.attrs) {
//             for (const key in data.attrs) {
//                 htmlString += ` ${key}="${data.attrs[key]}"`;
//             }
//         }

//         htmlString += '>';

//         if (data.children) {
//             for (const child of data.children) {
//                 htmlString += htmlTree(child);
//             }
//         }

//         htmlString += `</${data.tagName}>`;

//     } else if (data instanceof Array) {
//         for (const item of data) {
//             htmlString += htmlTree(item);
//         }
//     } else {
//         htmlString += data;
//     }

//     return htmlString;
// }

// const body = {
//     tagName: 'table',
//     children: [
//         {
//         tagName: 'div',
//         children: [
//             {
//                 tagName: 'span',
//                 children: ["Enter a data please:"],
//             },
//             {
//                 tagName: 'br',
//             },
//             {
//                 tagName: 'input',
//                 attrs: {
//                     type: 'text',
//                 },
//                 attrs: {
//                     id: 'name',
//                 },
//             },
//             {
//                 tagName: 'input',
//                 attrs: {
//                     type: 'text',
//                 },
//                 attrs: {
//                     id: 'surname',
//                 },
//             },
//         ]
//         },
//        {
//         tagName: 'div',
//         children: [
//             {
//                 tagName: 'button',
//                 attrs: {
//                     id: 'ok',
//                 },
//                 children: ["OK"],
//             },
//             {
//                 tagName: 'button',
//                 attrs: {
//                     id: 'cancel',
//                 },
//                 children: ["Cancel"],
//             }
//         ]
//        }
//     ]
// }

// const htmlString = htmlTree(body);
// document.write(htmlString);





// //Рекурсія: DOM tree

// function domTree(data, parent) {
//     if (!data || !data.tagName) { // перевірка на наявність tagName
//       return; // вихід з функції за відсутності
//     }
  
//     const element = document.createElement(data.tagName); // створення DOM-елементу на основі tagName
  
//     if (data.attrs) { // перевірка чи є в data атрибути attrs, то проходиться по них і встановлює кожен атрибут для створеного DOM-елемента
//       for (const key in data.attrs) {
//         if (Object.prototype.hasOwnProperty.call(data.attrs, key)) {
//           element.setAttribute(key, data.attrs[key]);
//         }
//       }
//     }
  
//     if (data.children) { // перевірка на наявність children
//       for (const childData of data.children) {
//         domTree(childData, element); // функція викликає саму себе рекурсивно з даними children та створеним DOM-елементом
//       }
//     }
  
//     if (parent) { // якщо parent переданий, то DOM-елемент додається до батьківського контейнера
//       parent.appendChild(element);
//     }
  
//     return element;
// }
  
// const body = {
//     tagName: 'table',
//     children: [
//       {
//         tagName: 'div',
//         children: [
//           {
//             tagName: 'span',
//             children: ["Enter a data please:"],
//           },
//           {
//             tagName: 'br',
//           },
//           {
//             tagName: 'input',
//             attrs: {
//               type: 'text',
//             },
//             attrs: {
//               id: 'name',
//             },
//           },
//           {
//             tagName: 'input',
//             attrs: {
//               type: 'text',
//             },
//             attrs: {
//               id: 'surname',
//             },
//           },
//         ],
//       },
//       {
//         tagName: 'div',
//         children: [
//           {
//             tagName: 'button',
//             attrs: {
//               id: 'ok',
//             },
//             children: ["OK"],
//           },
//           {
//             tagName: 'button',
//             attrs: {
//               id: 'cancel',
//             },
//             children: ["Cancel"],
//           },
//         ],
//       },
//     ],
// };
  
// domTree(body, document.body);




// //Рекурсія: Deep Copy

// function deepCopy(obj) { // функція для глибокої копії з аргументом, який ми будемо копіювати
//     if (typeof obj !== 'object' || obj === null) { // перевірка чи obj не є простим значенням
//       return obj; // Якщо це не об'єкт або null, повертаємо його
//     }
  
//     const copy = Array.isArray(obj) ? [] : {}; // якщо obj - масив, тоді ми створюємо новий порожній масив для збереження копії, яущо це не масив - тоді це об'єкт
  
//     for (const key in obj) { // проходимо через усі властивості масиву
//       if (Object.prototype.hasOwnProperty.call(obj, key)) { // перевіряємо чи є властивість key у obj
//         // Object.prototype - прототип об'єкта Object
//         // hasOwnProperty - властивість прототипу об'єкта Object - метод, який перевіряє чи є властивість із певним ім'ям в об'єкті
//         // call - виклик методу hasOwnProperty
//         copy[key] = deepCopy(obj[key]); // для кожної властивості викликаємо deepCopy і копіюємо значення
//       }
//     }
  
//     return copy; // повертаємо масив-копію
//   }

// const arr  = [1,"string", null, undefined, {a: 15, b: 10, c: [1,2,3,4],d: undefined, e: true }, true, false]
// const arr2 = deepCopy(arr)

// console.log(arr2);





//Рекурсия: My Stringify

// function stringify(data) {
//     if (data === null) { // перевірка чи data є null, числом або булевим значенням, якщо так, тоді значення конвертується в рядок і повертається
//         return 'null'; 

//       } else if (typeof data === 'number' || typeof data === 'boolean') { //
//         return data.toString();

//       } else if (typeof data === 'string') { // визначаємо чи data є рядком, якщо так то рядок обромляється лапками щоб відтворити формат рядка у JSON-форматі
//         return '"' + data + '"';

//       } else if (Array.isArray(data)) { // перевірка чи data є масивом, якщо так то застосовується рекурсія для кожного елемента 
//         const elements = data.map(element => stringify(element));

//         return '[' + elements.join(',') + ']'; // об'єднує елементи масиву комами та обрамлює їх квадратними дужками для представлення JSON-масиву

//       } else if (typeof data === 'object') { // перевірка чи data є об'єктом
//         const properties = [];

//         for (const key in data) { // якщо так, проходимось по усім властивостям 
//           if (Object.prototype.hasOwnProperty.call(data, key)) { // для кожної властивості визначаємо ключ + значення
//             const keyString = '"' + key + '"';
//             const valueString = stringify(data[key]); // до них засттосовуємо рекурсію та об'єднуємо їх у рядок JSON-об'єкта
//             properties.push(keyString + ':' + valueString);
//           }
//         }

//         return '{' + properties.join(',') + '}';

//     } else {
//         return undefined;
//     }
// }

// const arr3  = [1,"string", null, undefined, {a: 15, b: 10, c: [1,2,3,4],d: undefined, e: true }, true, false]
// const jsonString = stringify(arr3)

// console.log(JSON.parse(jsonString))


//Рекурсія: getElementById throw




