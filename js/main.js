/*
 Функция, возвращающая случайное целое число из переданного диапазона
включительно. Пример использования функции:

имя_функции(от, до); // Результат: целое число из диапазона "от...до"

*/

// моя функция

/*

const getRandomInteger = (min, max) => {

  if (min > max) {
    const i = min;
    min = max;
    max = i;
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
};

getRandomInteger(2, 0);
*/

function getRandomInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

/* Функция с HTML Academy
function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
  }
*/

/*
Функция для проверки максимальной длины строки. Будет использоваться для
проверки введенного комментария, но должна быть универсальна. Пример
использования функции:
 имя_функции(проверяемая_строка, максимальная_длина); // Результат: true, если
строка проходит по длине, и false – если не проходит
*/

const checkStr = (str, maxLength) => {

  if (str.length >= maxLength) {
    return alert('Строка слишком длинная. Должна быть не больше ' + maxLength + ' символов.');
  }
  console.log('Good');
};

checkStr('Это строка и проверка длины строки', 100);

// закомментировал лишний код, пока не нужен

/*
// Создаем массив id

const getId = function (startNumber, endNumber) {
  let arrayId = [];
  for (let i = startNumber; i < endNumber; i++) {
    arrayId.push(i);
  }
  return arrayId;
}

console.log(getId(20, 25));


const maxObjects = 25;

// Массив комментариев

const getArrayCommentObjects = function () {
  let arrayCommentObjects = [];
  for (let i = 0; i <= maxObjects; i++) {
    let id = i;
  }
}

// Генератор случайных id

const randomID = function (startNumber, endNumber, numbersOfAccount) {
  // создаем массив
  let arrayRnd = [];
  // пушим рандомное число
  arrayRnd.push(getRandomInteger(startNumber, endNumber));
  let swap;
  //let swap = getRandomInteger(startNumber, endNumber);
  //console.log('Swap first = ' + swap);
  //arrayRnd.push(swap);
  console.log(arrayRnd);
  console.log(arrayRnd.length);
/*

создаем массив
кладем рандомное число
берем еще одно рандомное число
проверяем с всеми числами
если есть совпадение - берем другое число

*/
/*
  // цикл количество создаваемых аккаунтов
  for (let i = 1; i < numbersOfAccount; i++) {
    let swap = getRandomInteger(startNumber, endNumber);
    // счетчик совпадения чисел. 0 - не совпали, 1 - совпали
    let counter = 0;

    // цикл проверки рандомного числа с числами в массиве
    for (let j = 0; j < arrayRnd.length; j++) {

      console.log('Swap = ' + swap + ', j = ' + arrayRnd[j]);
      if (swap === arrayRnd[j]) {
        console.log('swap = j, ' + swap + ' ' + arrayRnd[j]);
        counter = 1;
      }
    }
    // проверка совпадения рандомного числа с числами в массиве
    if (counter !== 1) {
      console.log('Push');
      arrayRnd.push(swap);
    } else {
      i--;
      console.log('Not Push');
    }

  }

  return arrayRnd;
}



console.log(randomID(1,10,7));
*/

const COMMENT_NAME = [
  "Александр",
"Марк",
"Георгий",
"Артемий",
"Дмитрий",
"Константин",
"Давид",
"Эмиль",
"Максим",
"Тимур",
"Платон",
"Назар",
"Сергей",
"Олег",
"Анатолий",
"Савва",
"Андрей",
"Ярослав",
"Григорий",
"Ян",
"Алексей",
"Антон",
"Демид",
"Рустам",
"Артём",
"Николай",
"Данила",
"Игнат",
"Илья",
"Глеб",
"Станислав",
"Влад",
"Кирилл",
"Данил",
"Василий",
"Альберт",
"Михаил",
"Савелий",
"Федор",
"Тамерлан",
"Никита",
"Вадим",
"Родион",
"Айдар",
"Матвей",
"Степан",
"Леонид",
"Роберт",
"Роман",
"Юрий",
"Одиссей",
"Адель",
"Егор",
"Богдан",
"Валерий",
"Марсель",
"Арсений",
"Артур",
"Святослав",
"Ильдар",
"Иван",
"Семен",
"Борис",
"Самир",
"Денис",
"Макар",
"Эдуард",
"Тихон",
"Евгений",
"Лев",
"Марат",
"Рамиль",
"Даниил",
"Виктор",
"Герман",
"Ринат",
"Тимофей",
"Елисей",
"Даниэль",
"Радмир",
"Владислав",
"Виталий",
"Петр",
"Филипп",
"Игорь",
"Вячеслав",
"Амир",
"Арсен",
"Владимир",
"Захар",
"Всеволод",
"Ростислав",
"Павел",
"Мирон",
"Мирослав",
"Святогор",
"Руслан",
"Дамир",
"Гордей",
"Яромир"
]

const DESCRIPTION = [
  "Описание фотографии",
  "Описание фото",
  "Подробное описание фотографии",
  "Подробное описание фото",
  "Эта фотография",
  "Фотография на память",
  "Фоточка",
  "Цифровая фотография",
]

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
]

// функция упрощения подстановки

const getRandomElements = (elements) => {
  return elements[getRandomInteger(0, elements.length -1)];
}

// создание комментариев

const createComments = () => {
  return {
    id: getRandomInteger(1, 10),
    avatar: 'img/avatar-' + getRandomInteger(1, 6) + '.svg',
    message: getRandomElements(MESSAGE),
    name: getRandomElements(COMMENT_NAME)
  }
}

// создание объекта

let idCounter = 0;

const createObject = () => {
  idCounter++;

  return {
    id: idCounter,
    url: 'photos/' + idCounter + '.jpg',
    description: getRandomElements(DESCRIPTION),
    likes: getRandomInteger(15, 200),
    comments: Array.from({length: getRandomInteger(1, 6)}, createComments),
  }

}

const similarWizard = Array.from({length: 25}, createObject);

console.log(similarWizard);

const category = 'testing';
const cat2 = 'hueta';

console.log(`http://mysite.ru/${category}/${cat2}.html`);
