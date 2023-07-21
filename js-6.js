//Literals

const cat = {
    name: 'Кішка',
    color: 'Black',
    breed: 'Siamese',
    length: '60 см',
    weight: '15 кг'
}

const table = {
    name: 'Стіл',
    color: 'Pink tree',
    width: '150 см',
    length: '70 см',
    height: '80 см'
}

const mother = {
    age: '50 років',
    name: 'Леся',
    surname: 'Тимченко',
    fatherName: 'Петрівна'
}

console.log(cat)
console.log(table)
console.log(mother)



//Literals expand

const cat1 = {}
cat1[prompt("Введіть ключ:")] = prompt("Введіть значення для ключа");
cat1[prompt("Введіть ключ:")] = prompt("Введіть значення для ключа");

console.log(cat1)




//Literals copy

const cat2 = cat1
cat2[prompt("Введіть ключ:")] = prompt("Введіть значення для ключа");

console.log(cat2)




//Html tree

const body = {
    tagName: 'table',
    children: [
        {
        tagName: 'div',
        children: [
            {
                tagName: 'span',
                children: ["Enter a data please:"],
            },
            {
                tagName: 'br',
            },
            {
                tagName: 'input',
                attrs: {
                    type: 'text',
                },
                attrs: {
                    id: 'name',
                },
            },
            {
                tagName: 'input',
                attrs: {
                    type: 'text',
                },
                attrs: {
                    id: 'surname',
                },
            },
        ]
        },
       {
        tagName: 'div',
        children: [
            {
                tagName: 'button',
                attrs: {
                    id: 'ok',
                },
                children: ["OK"],
            },
            {
                tagName: 'button',
                attrs: {
                    id: 'cancel',
                },
                children: ["Cancel"],
            }
        ]
       }
    ]
}

const result_button = body.children[1].children[1].children[0];
console.log(result_button);

const result_id = body.children[0].children[3].attrs.id;
console.log(result_id);




//Parent

body.parent = null;

body.children[0].parent = body;
body.children[1].parent = body;
body.children[0].children[0].parent = body.children[0];
body.children[0].children[1].parent = body.children[0];
body.children[0].children[2].parent = body.children[0];
body.children[0].children[3].parent = body.children[0];
body.children[1].children[0].parent = body.children[1];
body.children[1].children[1].parent = body.children[1];

console.log(body);




//Change OK

const namebutton = prompt("Введіть значення атрибута 'id':");
body.children[1].children[0].attrs.id = namebutton;

console.log(body);




//Destructure

const spantext = body.children[0].children[0].children;
const buttontext = body.children[1].children[1].children;
const idtext = body.children[0].children[3].attrs.id;

console.log(spantext, buttontext, idtext);




//Destruct array

let arr = [1,2,3,4,5, "a", "b", "c"];
const [odd1, even1, odd2, even2, odd3, ...abc] = arr;

console.log(odd1, even1, odd2, even2, odd3, abc);




//Destruct string

let arr1 = [1, "abc"]
const [number, [s1, s2, s3]] = arr1;

console.log(number, s1 + s2 + s3);




//Destruct 2

let obj = {name: 'Ivan',
           surname: 'Petrov',
           children: [{name: 'Maria'}, {name: 'Nikolay'}]
};
const {children: [{ name: name1 }, { name: name2 }]} = obj;

console.log(name1, name2);




//Destruct 3

let arr2 = [1,2,3,4, 5,6,7,10];

const [a, b, ...rest] = arr2;
const { length } = arr2;

console.log(a, b, length);




//Copy delete

const table1 = {
    name: 'Стіл',
    color: 'Pink tree',
    width: '150 см',
    length: '70 см',
    height: '80 см'
};
const key = prompt("Введіть ключ, який потрібно вилучити:");
const {[key]: _, ...resttable1} = table1;

console.log(resttable1)




//Currency real rate

const inputcurrency = prompt("Введіть вхідну валюту:");
const conversion = prompt("Введіть валюту, в яку конвертуєте:");
const amount = Number(prompt("Введіть суму у вхідній валюті:"));

fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
    .then(data => {
        if (data) {
            console.log(data);
            const change = data.rates[conversion];
            if (change) {
                const result1 = amount * change;
                console.log(`${amount} ${inputcurrency} = ${result1.toFixed(2)} ${conversion}`);
            }
            else {
            console.log("Введено невірний код валюти.");
            }
        } 
    }
);

















