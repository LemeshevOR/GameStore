
const myButton1 = document.getElementById("myButton1");

myButton1.addEventListener("click", function () {
  let monthNumber = Number(prompt("Введите месяц для определения сезона"));
  switch (monthNumber) {
    case 1:
    case 2:
    case 12:
      alert("Этот месяц принадлежит к сезону зима");
      break;
    case 3:
    case 4:
    case 5:
      alert("Этот месяц принадлежит к сезону весна");
      break;
    case 6:
    case 7:
    case 8:
      alert("Этот месяц принадлежит к сезону лето");
      break;
    case 9:
    case 10:
    case 11:
      alert("Этот месяц принадлежит к сезону осень");
      break;
    default:
      alert("Номер месяца больше 12");
  }
});

const myButton2 = document.getElementById("myButton2");

myButton2.addEventListener("click", function () {
  const arr = [
    "Яблоко",
    "Груша",
    "Дыня",
    "Виноград",
    "Персик",
    "Апельсин",
    "Мандарин",
  ];

  // Перемешиваем элементы массива
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  // Выводим перемешанные элементы массива на экран
  alert(`Запомни:\n${arr.join(", ")}`);

  // Спрашиваем у пользователя о первом и последнем элементах массива
  const first = prompt(`Чему равнялся первый элемент массива?`);
  const last = prompt(`Чему равнялся последний элемент массива?`);

  // Проверяем ответы пользователя и выводим результат
  if (first === arr[0] && last === arr[arr.length - 1]) {
    alert("Поздравляем, вы угадали оба элемента!");
  } else if (first === arr[0] || last === arr[arr.length - 1]) {
    alert("Вы были близки к победе!");
  } else {
    alert("К сожалению, вы не угадали ни одного элемента!");
  }
});
