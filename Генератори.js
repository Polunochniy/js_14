

const alphabet = [
  'A', 'B', 'C', 'D', 'E', 'F',
  'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
  'U', 'V', 'W', 'X', 'Y', 'Z'
];

let incorrectClickCount = 0; //відстеження кількості неправильних кліків

function trueLetter(letter) {
  const getLetterOne = document.getElementById('letter-1');
  const getLetterThree = document.getElementById('letter-3');
  const getLetterFive = document.getElementById('letter-5');
  const getLetterSix = document.getElementById('letter-6');
  const getLetterSeven = document.getElementById('letter-7');
  const getLetterEight = document.getElementById('letter-8');
  const getLetterNine = document.getElementById('letter-9');

  if (['G', 'E', 'N', 'R', 'A', 'T', 'O'].includes(letter)) { //чи є конкретна буква в цьому масиві
    if (letter === 'G'){
      getLetterOne.textContent = 'G';
    }
    if (letter === 'N'){
        getLetterThree.textContent = 'N';
    }
    if (letter === 'R'){
        getLetterFive.textContent = 'R';
        getLetterNine.textContent = 'R';
    }
    if (letter === 'A'){
        getLetterSix.textContent = 'A';
    }
    if (letter === 'T'){
        getLetterSeven.textContent = 'T';
    }
    if (letter === 'O'){
        getLetterEight.textContent = 'O';
    }
  }
}

function falseLetter(letter) {
  const getLetters = document.getElementById(letter);

  if (getLetters) {
    if (getLetters.style.backgroundColor !== 'red') {// лічильник натискань збільшується на невірну букву, якщо вона ще не виділена червоним
      incorrectClickCount++;
      getLetters.style.backgroundColor = 'red';
    }

    if (!['G', 'E', 'N', 'R', 'A', 'T', 'O'].includes(letter)) {
      const currentImageGallows = document.getElementById('gallows');
      if (currentImageGallows) {
        currentImageGallows.remove();
      }

      const imageHead = document.createElement('img');
      imageHead.src = 'https://upload.wikimedia.org/wikipedia/commons/3/30/Hangman-1.png';
      imageHead.id = 'head';
      document.body.appendChild(imageHead);
    }

    if (incorrectClickCount === 2) {
      addBody();
    }
    if (incorrectClickCount === 3) {
      addLeftHand();
    }
    if (incorrectClickCount === 4) {
      addRightHand();
    }
    if (incorrectClickCount === 5) {
      addLeftLeg();
    }
    if (incorrectClickCount === 6) {
      addRightLeg();
      alert("Гра закінчена")
    }
  }
}

alphabet.forEach(letter => {
  const getLetters = document.getElementById(letter);

  if (getLetters) {
    getLetters.addEventListener('click', function () {
      if (['G', 'E', 'N', 'R', 'A', 'T', 'O'].includes(letter)) {
        getLetters.style.backgroundColor = 'lightgreen';
        trueLetter(letter);
      } else {
        falseLetter(letter);
      }
    });
  }
});

let answer = false; // змінна буде вказувати чи закінчилась гра

function* gameGenerator() {
  while (incorrectClickCount < 6) { // гра продовжується поки невірних кліків менше 6
    const playerCommand = yield; //генератор зупиняється і очікує наступне значення від коду. Коли викличемо next генератор продовжиться від точки зупинки зі значенням playerCommand
    
    const letter = playerCommand.split(' ')[2]; // розбиваємо команду, яка містить click та обрану літеру, на дві частини і витягуємо літеру
    
    if (['G', 'E', 'N', 'R', 'A', 'T', 'O'].includes(letter)) { // перевірка чи вірна буква
      trueLetter(letter);
    } else {
      falseLetter(letter);
    }
  }
}

const wordGenerator = gameGenerator(); //екземпляр генератора
wordGenerator.next(); //запуск генератора

function addBody() {
  const currentImageHead = document.getElementById('head');
  if (currentImageHead) {
    currentImageHead.remove();
  }
  const imageBody = document.createElement('img');
  imageBody.src = 'https://upload.wikimedia.org/wikipedia/commons/7/70/Hangman-2.png';
  imageBody.id = 'body';
  document.body.appendChild(imageBody);
}

function addLeftHand() {
  const currentImageBody = document.getElementById('body');
  if (currentImageBody) {
    currentImageBody.remove();
  }
  const imageLeftHand = document.createElement('img');
  imageLeftHand.src = 'https://upload.wikimedia.org/wikipedia/commons/9/97/Hangman-3.png';
  imageLeftHand.id = 'leftHand';
  document.body.appendChild(imageLeftHand);
}

function addRightHand() {
  const currentImageLeftHand = document.getElementById('leftHand');
  if (currentImageLeftHand) {
    currentImageLeftHand.remove();
  }
  const imageRightHand = document.createElement('img');
  imageRightHand.src = 'https://upload.wikimedia.org/wikipedia/commons/2/27/Hangman-4.png';
  imageRightHand.id = 'rightHand';
  document.body.appendChild(imageRightHand);
}

function addLeftLeg() {
  const currentImageRightHand = document.getElementById('rightHand');
  if (currentImageRightHand) {
    currentImageRightHand.remove();
  }
  const imageLeftLeg = document.createElement('img');
  imageLeftLeg.src = 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Hangman-5.png';
  imageLeftLeg.id = 'leftLeg';
  document.body.appendChild(imageLeftLeg);
}

function addRightLeg() {
  const currentImageLeftLeg = document.getElementById('leftLeg');
  if (currentImageLeftLeg) {
    currentImageLeftLeg.remove();
  }
  const imageRightLeg = document.createElement('img');
  imageRightLeg.src = 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Hangman-6.png';
  imageRightLeg.id = 'rightLeg';
  document.body.appendChild(imageRightLeg);
}








