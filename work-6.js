// Задание 1:
console.log('Задание 1');
const arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  if (arr[i] === 10) {
    break;
  }
}



// Задание 2:
console.log('Задание 2');
const arr2 = [1, 5, 4, 10, 0, 3];
const pos = arr2.indexOf(4);
console.log(pos);



// Задание 3:
console.log('Задание 3');
const arr3 = [1, 3, 5, 10, 20];
const str3 = arr3.join(' ');
console.log(str3);



// Задание 4:
console.log('Задание 4');
const arr4 = [];
for (let i = 0; i < 3; i++) {
  arr4[i] = [];
  for (let j = 0; j < 3; j++) {
    arr4[i][j] = 1;
  }
}
console.log(arr4);



// Задание 5:
console.log('Задание 5');
const arr5 = [1, 1, 1];
arr5.push(2, 2, 2);
console.log(arr5);



// Задание 6:
console.log('Задание 6');
const arr6 = [9, 8, 7, 'a', 6, 5];
arr6.sort();
arr6.pop();
console.log(arr6);



// Задание 7:
console.log('Задание 7');
const arr7 = [9, 8, 7, 6, 5];
const userInput = prompt('Введите число от 1 до 10');
let search=arr7.includes(Number(userInput))
if (search) {
  console.log('Число найдено');
} else {
  console.log('Число не найдено');
}



// Задание 8:
console.log('Задание 8');
const str = 'abcdef';
const reversedStr = str.split('').reverse().join('');
console.log(reversedStr);



// Задание 9:
console.log('Задание 9');
const arr9 = [[1, 2, 3],[4, 5, 6]];
const newArr9 = arr9.flat();
console.log(newArr9);



// Задание 10:
console.log('Задание 10');
const arr10 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr10.length - 1; i++) {
  console.log(arr10[i] + arr10[i+1]);
}



// Задание 11:
console.log('Задание 11');
function squareArray(arr) {
    return arr.map(x => x ** 2);
  }
  const result = squareArray([1, 2, 3, 4, 5]);
  console.log(result); 



// Задание 12:
console.log('Задание 12');
function getLengthWords(arr12) {
  const newArr12 = [];
  for (let i = 0; i < arr12.length; i++) {
    newArr12[i] = arr12[i].length;
  }
  return newArr12;
}
const result12 = getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']);
console.log(result12);



// Задание 13:
console.log('Задание 13');
function filterPositive(array13) {
  const newArr13 = []
  for (let i = 0; i < array13.length; i++) {
    if (array13[i] < 0) {
      newArr13.push(array13[i]);
    }
  }
  return newArr13;
}
const result13 = filterPositive([-1, 0, 5, -10, 56]);
console.log(result13);



// Задание 14:
console.log('Задание 14');
const arr14 = [];
const evenArr14= [];
for (let i = 0; i < 10; i++) {
  const num14 = Math.floor(Math.random() * 11);
  arr14.push(num14);
  if (num14 % 2 === 0) {
    evenArr14.push(num14);
  }
}
console.log(arr14);
console.log(evenArr14);



// Задание 15:
console.log('Задание 15');
const arr15 = [];
let sum15 = 0;
for (let i = 0; i < 6; i++) {
  const num15 = Math.floor(Math.random() * 10) + 1;
  arr15.push(num15);
  sum15 += num15;
}
const average15 = sum15 / arr15.length;
console.log(arr15);
console.log(average15);