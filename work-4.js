//Задание 1:
for(let i = 1; i < 8; i++) {
    console.log("Привет");
}


//Задание 2
for(let i = 1; i <= 9; i++) {
    console.log(i);
}

//Задание 3:
for(let i = 7; i <= 22; i++) {
    console.log(i);
}

//Задание 4:
let obj = {
    "Коля": "200",
    "Вася": "300",
    "Петя": "400"
};

for(let key in obj) {
    console.log(key + " — зарплата " + obj[key] + " долларов.");
}

//Задание 5:
let n = 1000;
let num = 0;
while(n>=50) {
    n = n/2;
    num++;
}
console.log(n);
console.log(num);

//Задание 6:
let firstFriday = 5; // в феврале 2021 первая пятница 5 числа
let dayOfMonth = firstFriday;
while(dayOfMonth <= 31) {
    console.log("Сегодня пятница, " + dayOfMonth + "-е число. Необходимо подготовить отчет.");
    dayOfMonth += 7;
}