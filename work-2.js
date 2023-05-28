
window.addEventListener("load", function() {
//Задание 1:
let a = 10;
alert(`Вывод переменной cо значением 10: ${a}`);
a = 20;
alert(`Вывод переменной cо значением 20:  ${a}`);

//Задание 2:
const releasefull = 2007;
alert(`Год выпуска первого iphone: ${releasefull}`);

//Задание 3:
const creatorName = "olegzuz";
alert(`Ваше имя: ${creatorName}`);

//Задание 4:
let a_4 = 10;
let b_4 = 2;
alert(`Вывод 10+2:  ${a_4 + b_4}`); // выводит 12
alert(`Вывод 10-2:  ${a_4 - b_4}`); // выводит 8
alert(`Вывод 10*2:  ${a_4 * b_4}`); // выводит 20
alert(`Вывод 10/2:  ${a_4 / b_4}`); // выводит 5

//Задание 5:
let result = 2**5; // 2 в 5-й степени
alert(`Вывод 2 в степени 5:  ${result}`); // выводит 32

//Задание 6:
let a_6 = 9;
let b_6 = 2;
let remainder = a_6 % b_6;
alert(`Вывод остатка от деления 9 на 2:  ${remainder}`); // выводит 1

//Задание 7:
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(`Вывод 7:  ${num}`);

//Задание 8:
let age = prompt("Сколько вам лет?");
alert(`Ваш возраст:  ${age}`);

//Задание 9.0:
let user = {
  name: "olegzuz",
  age: 18,
  isAdmin: true
};

//Задание 9.1:
user.cityOfResidence = "Moscow";
console.log(user); 

//Задание 9.2:
user.age = 19;
console.log(user); 

//Задание 9.3:
delete user.cityOfResidence;
console.log(user); 

//Задание 9.4:
let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);

//Задание 10:
let name1 = prompt("Как вас зовут?");
alert(`Привет, ${name1}!`);
});