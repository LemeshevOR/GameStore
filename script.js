const myButton = document.getElementById('myButton');

myButton.addEventListener('click', function() {
    let monthNumber = Number(prompt("Введите месяц для определения сезона "));
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

  