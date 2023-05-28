//Задание 1:
const password = "12345";
let passwordPeople = prompt("Введите пароль");
password===passwordPeople ? console.log("Пароль введен верно"): console.log("Пароль введен не верно");

//Задание 2:
let c = Number(prompt("Введите число"));
(c > 0  &&  c < 10) ? console.log("Число больше 0 и меньше 10"): console.log("Число не больше 0 и меньше 10");

//Задание 3:
let d = Number(prompt("Введите 1-e число "));
let e = Number(prompt("Введите 2-e число "));
(d > 100  ||  c > 100) ? console.log("Одно из чисел больше 100"): console.log("Оба числа меньше 100");

//Задание 4:
let a_4 = '2';
let b_4 = '3';
alert(`Cумма 2 + 3 = ${Number(a_4) + Number(b_4)}`);

//Задание 5:
let monthNumber = Number(prompt("Введите месяц для определения сезона "));

switch (monthNumber) {
  case 1:
  case 2:
  case 12:
    console.log("Этот месяц принадлежит к сезону зима");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Этот месяц принадлежит к сезону весна");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Этот месяц принадлежит к сезону лето");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Этот месяц принадлежит к сезону осень");
    break;
  default:
    console.log("Номер месяца больше 12");
}

