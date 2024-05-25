let numberEnteredByTheUser = prompt('введите число');
numberEnteredByTheUser;

if (numberEnteredByTheUser > 0) {
  if (numberEnteredByTheUser % 2 >0) {
    alert('Введите чётное число');
  } else {
    alert(numberEnteredByTheUser  + ' ' + String(numberEnteredByTheUser) + String(numberEnteredByTheUser) + ' ' + String(numberEnteredByTheUser) + String(numberEnteredByTheUser) + String(numberEnteredByTheUser));
  }
} else {
  alert('Число должно быть больше 0!');
}