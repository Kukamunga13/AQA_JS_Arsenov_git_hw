
const minAge = 18;
const maxAge = 60;
const age = prompt('введите возраст');

if (age / 1 >= 0) {
  if (age >= 0) {
    if (age < minAge) {
      alert('You do not have access cause your age is ' + age + " It's less then ");
    } else if (age >= minAge && age <= maxAge) {  // специально поставил ade <= maxAge, тк является верхней границей, и соответствует критериям
      alert("Welcome!");
    } else if (age > maxAge) {
      alert('Keep calm and look Culture channel');
    } 
  } else {
    alert('Technical work');
  }
} else {
  console.log('Возраст это цифра и может начинаться от 0'); // Поменял текст ошибки, тк рпи вводе отрицательного числа проверка отрабатывает корректно, но выводить текст "это не число не совсем верно" 
}
