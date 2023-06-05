//Задание 1
let str='ОлЕГ';
console.log(str.toLowerCase());

//Задание 2
const searchStart = (arr, s) => arr.filter(str => str.toLowerCase().startsWith(s.toLowerCase()));
console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко')); 
console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру')); 
console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино')); 

//Задание 3
let num = 32.58884;
console.log(Math.floor(num));    
console.log(Math.ceil(num));    
console.log(Math.round(num));

//Задание 4
let numbers = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...numbers));  
console.log(Math.max(...numbers)); 

//Задание 5
const getRandomNumber = () => Math.floor(Math.random() * 10+1);
for (let i = 0; i < 10; i++) {
    console.log(getRandomNumber());
}

//Задание 6
const getRandomArray = num => {
    const randomArray = [];
    const length = Math.floor(num / 2);
  
    for (let i = 0; i < length; i++) {
      randomArray.push(Math.floor(Math.random() * (num+1)));
    }
    return randomArray;
  }
  console.log(getRandomArray(4)); 
  console.log(getRandomArray(8)); 

//Задание 7
const getArray = (min,max) => Math.floor(Math.random() * (max-min+1)+min);
console.log(getArray(0,10)); 
console.log(getArray(10,20)); 
  
//Задание 8
let currentDate = new Date();
console.log(currentDate.getDate(currentDate.setDate(currentDate.getDate()+73)));

//Задание 9
function formatDate(date) {
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      weekday: 'long', 
      timezone: 'UTC' 
    };
    const dateStr = date.toLocaleDateString('ru-RU', options);
    const timeStr = date.toLocaleTimeString();
    const dayOfWeek = date.toLocaleDateString('ru-RU', {weekday: 'long'});
    return `Дата: ${dateStr} - это ${dayOfWeek}.\nВремя: ${timeStr}`;
  }
const date = new Date();
console.log(formatDate(date));
//Задание 10

