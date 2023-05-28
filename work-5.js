// Задание 1:
const getMin = (a, b) => (a < b ? console.log(`Меньшее из чисел ${a} и ${b} это ${a}`) : console.log(`Меньшее из чисел ${a} и ${b} это ${b}`));
let a=1000;
let b=500;
getMin(a,b);

// Задание 2:
const evenOrOdd = num => (num % 2 === 0 ? console.log(`Число ${num} четное`) : console.log(`Число ${num} нечетное`));
let num=5;
evenOrOdd(num);

// Задание 3.1:
const squareLog = numb => console.log(`Квадрат ${numb} это ${numb**2}`);
let num2=11;
squareLog(num2)

// Задание 3.2:
const squareReturn = numbb => numbb**2;
let num3=54;
console.log(`Квадрат ${num3} это ${squareReturn(num3)}`)


// Задание 4:
const checkAge = () => {
  const age = prompt('Сколько Вам лет?');
  if (age <= 0) {
    alert('Вы ввели неправильное значение');
  } else if (age > 0 && age <= 12) {
    alert('Привет, друг!');
  } else {
    alert('Добро пожаловать!');
  }
}
checkAge();


// Задание 5:
const multiplyNums = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
    return `Среди ${a} и ${b} одно или оба значения не являются числом`;
  } else {
    return `Произведение ${a} и ${b} это ${a * b}`;
  }
}
console.log(multiplyNums(100000,5))

// Задание 6:
const cubeNum = num => {
  if (typeof num !== 'number' || isNaN(num)) {
    return console.log('Переданный параметр не является числом');
  } else {
    const cube = num ** 3;
    return console.log(`${num} в кубе это' ${cube}`);
  }
}
cubeNum(9)

// Задание 7:
const circle1 = {
  radius: 5,
  getArea() {
    return console.log(`Площадь круга радиусом ${this.radius} это ${Math.PI * this.radius ** 2}`);
  },
  getPerimeter() {
    return console.log(`Периметр круга радиусом ${this.radius} это ${2 * Math.PI * this.radius}`);
  }
};
circle1.getArea();
circle1.getPerimeter();

const circle2 = {
  radius: 8,
  getArea() {
    return console.log(`Площадь круга радиусом ${this.radius} это ${Math.PI * this.radius ** 2}`);
  },
  getPerimeter() {
    return console.log(`Периметр круга радиусом ${this.radius} это ${2 * Math.PI * this.radius}`);
  }
};
circle2.getArea();
circle2.getPerimeter();
