git commit -m "first commit"let name = ' Ani5   ';
let age = 26;
let subscription = 'free'; //'free''basic' 'premium'
let lastLogin = 22; //врмя в формате часов от 0 до 23

name = name.trim()

const accessLevel = getAccessLevel(subscription)
const timeOfDay = getTimeOfDay(lastLogin)

// проверить тип данных и преобразовать вводные к нужным типам

function validateAge(age) {
  const numAge = Number(age);
   if (numAge < 18) {
    console.log("Вы несовершеннолетний пользователь.")
  }
  return !isNaN(numAge) && numAge > 0; 
}
//проверяет, что возраст это число и больше нуля
// если возраст меньше 18 добавить предупреждение "Вы несовершеннолетний пользователь."

function validateName(name) {
  return String(name).trim() !== '';
   //проверяет введено ли какое-нибудь значение
}
//проверяет, что имя не пустое
// let validateName = (name) => {
//  return String(name).trim() !== '';
//  }

function validateSubscription(subscription) {
  return subscription === 'free' || subscription === 'basic' || subscription === 'premium' 
}
//проверяет, что тип подписки входит в допустимые значения

// function expression function declaration arrow function


function getTimeOfDay(lastLogin) {
  return (
    lastLogin < 0 || lastLogin > 23 ? 'некорректное время' :
    lastLogin >= 22 || lastLogin <= 4 ? 'ночь' :
    lastLogin <= 11 ? 'утро' :
    lastLogin <= 17 ? 'день' :
    'вечер'
  )
}
// обработка времени входа
// если пользователь не заходил с 22 до 5 - добавить "позднее время для входа" не поняла это условие

function getAccessLevel(subscription) {
  if (subscription === "premium") {
    return "Полный доступ";
  } else if (subscription === "basic") {
    return "Ограниченный доступ";
  } else if (subscription === "free") {
    return "Доступ только к бесплатному контенту";
  } else {
    return "Введите корректное значение";
  }
}
//возвпащает строку с уровнем доступа
// "Полный доступ" "premium"
// Ограниченный доступ" "basic"
// "Доступ только к бесплатному контенту" "free"

// операторы сравнения и логические операторы для проверки подписки
// проверка неверного значения через оператор ?? или проверка на undefined


function displayUserInfo(name, age, timeOfDay, accessLevel) {
  return `Привет, ${name}! Вам ${age} лет. Сейчас ${timeOfDay}. Уровень доступа: ${accessLevel}.`;
}

//собирает всю информацию и выводит сообщение в консоль
// локальные и внешние переменные
// return 

if (!validateAge(age)) {
  console.log("Введите корректный возраст");
} else if (!validateName(name)) {
  console.log("Введите имя");
} else if (!validateSubscription(subscription)) {
  console.log("Введите корректную подписку");
} else {
  console.log(displayUserInfo(name, age, timeOfDay, accessLevel))
}

const bonusOfAge = age => age % 10
const bonus = bonusOfAge(age)
console.log('Ваш бонус: ', bonus)
//не поняла куда засунуть += к бонусу. если 20, 30 лет - бонус 0. не поняла логики задания

