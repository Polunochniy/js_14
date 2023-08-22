$('.slider_items').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
});

const fields = [
    'email',
    'password',
    'name',
    'date',
    'gender',
    'zodiac',
    'weight',
    'height',
];

const SLIDER_DATA_LENGTH = $('.sliders').length;

const updateStorage = person => { // функція являє собою об'єкт з інформацією про людину
    const storage = localStorage.getItem('people'); //намагаємось отримати дані з локального сховища
    if (!storage) {
      localStorage.setItem('people', JSON.stringify([person])); // якщо цих даних немає у сховищі, то виб'є null.
      // В такому випадку створиться новий масив person, який стане рядком і збережеться у сховищі під ключем 'people'
    } else {
      const prevData = JSON.parse(localStorage.getItem('people')); // якщо у сховищі є дані, то вони дістаються з нього,
      // перетворюються в об'єкти і зберігаються у змінну prevData
      const newData = localStorage.setItem('people', JSON.stringify([...prevData, person])); // створюємо новий масив з усіма даними prevData та person,
      // після чого перетворюємо їх в рядки та зберігаємо у сховище під ключем 'people'
    }
};

const generateNewPerson = () => { //створюємо об'єкт, в який додаватимуться дані з полів форми
  const result = fields.reduce((acc, item) => { // об'єкт result буде збирати дані з полів, для цього перебираємо масив fields за допомогою reduce
    const value = $('#' + item).val(); // item - рядок з ідентифікатором поля.
    // Далі беремо елемент із заданим ідентифікатором '#' та отримуємо його значення за допомогою val()
    if (value) {
      acc[item] = value; // якщо змінна value не порожня, то додаємо до об'єкта acc під ключем item
    }
    return acc;
  }, {});
  return result; // методу reduce повернеться об'єкт result, який містить заповнені поля
};

const handleSaveButtonClick = () => {
  const newPerson = generateNewPerson(); // викликаємо функцію, яка створює об'єкт з даними про особу і зберігаємо у змінну
  updateStorage(newPerson); // викликаємо функцію для збереження даних у сховищі та передаємо для збереження об'єкт newPerson
  $('.slider_items').slick('slickGoTo', SLIDER_DATA_LENGTH); // тут обираємо усі слайдери, переходимо на потрібний слайд
};

$('#save').on('click', handleSaveButtonClick); // коли користувач клікає на елемент #save викликається функція handleSaveButtonClick

const test = (a = 5, b) => { // якщо не надати аргумент "а", то він буде за замовчуванням = 5
  return a+b // повертаємо суму параметрів
};


$('.slider').on('afterChange', (_, slide) => { // обробляється подія afterChange для всіх елементів з класом .slider після того як слайд зміниться
  if (slide.currentSlide === SLIDER_DATA_LENGTH - 1) {  // перевіряємо чи це останній слайд

    const people = JSON.parse(localStorage.getItem('people')); // вилучаємо дані зі сховища за допомогою ключа people, переводимо у масив
    const getSumWeight = people.reduce((sum, person) => { // обчислення суми ваги
      return sum + Number(person.weight || 0); // якщо вага визначена, тоді вона додається до загальної суми, потім зберігаємо у змінній
    }, 0);

    console.log('sumWeight', getSumWeight);

    const getMatchName = people.filter((el) => { // проводимо фільтрацію нового масиву
      for (let i of people) { // перебирає елементи і порівнює "el" з кожним елементом
        if (i.name === el.name) { // перевірка: чи співпадають імена поточного елемента "i" з ім'ям поточного елемента "el"
          return el.name; // у разі співпадіння повертаємо ім'я "el"
        } else {
          return null; // якщо імена не співпадають - повертаємо null
        }
      }
    });

    console.log('matchName', getMatchName);

    const getGenderCount = people.reduce( // ця змінна буде містити результат виконання функції reduce 
      (acc, el) => { // функція зворотнього виклику з акумулятором і поточним елементом
        if (el.gender) { // перевіряємо, чи існує поле gender в el
          if(el.gender === 'male') { // перевірка: чи поле gender = male, якщо так, то людина - чоловік
          } else {} // якщо поле не дорівнює male, буде female
        }
        return acc; // повернення акумулятора
      },
      { male: 0, female: 0 } // початковий стан акумулятора, де 0 чоловіків і 0 жінок
    );

    console.log('getGenderCount', getGenderCount);
  }
});
