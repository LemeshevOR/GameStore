//Задание 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 people.sort((a, b) => a.age - b.age);
 console.log(people);

 //Задание 2
 function map(array, mapFunction) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
      newArray.push(mapFunction(array[i]));
    }
    return newArray;
  }
  
  function filter(array, ruleFunction) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
      var item = array[i];
      if (ruleFunction(item)) {
        newArray.push(item);
      }
    }
    return newArray;
  }
  
  function isPositive(num) {
    return num > 0;
  }
  
  function isMale(person) {
    return person.gender === 'male';
  }

  console.log(filter([3, -4, 1, 9], isPositive)); 
  const peoples = [
     {name: 'Глеб', gender: 'male'},
     {name: 'Анна', gender: 'female'},
     {name: 'Олег', gender: 'male'},
     {name: 'Оксана', gender: 'female'}
  ];
  console.log(filter(peoples, isMale)); 


//Задание 3
let time = 10;
const interval = setInterval(() => {
    time -= 1;
    console.log(new Date());
}, 1000);

setTimeout(() => {
    clearInterval(interval);
    console.log(10 + ' секунд истекли')
}, time * 1000)


//Задание 4
function delayForSecond(callback) {
    setTimeout(callback, 1000);
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
})


//Задание 5
// Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда», 
// а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(() => { 
  sayHi('Глеб');
});