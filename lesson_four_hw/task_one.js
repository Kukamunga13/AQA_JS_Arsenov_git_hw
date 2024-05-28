// Также это решение к задаче task 2.3 и Task 3. Для решения Task 1 в переменной age оставляем просто значение, переменную ageType удаляем. В конструкции if else заменяем ageType на age
const minAge = 18;
const maxAge = 60;
const age = prompt('введите возраст');
const ageType = Number(age);

if (ageType >= 0) {
  if (ageType < minAge) {
    alert('You do not have access cause your age is ' + age + " It's less then ");
  } else if (age >= minAge && age <= maxAge) {  // специально поставил ade <= maxAge, тк является верхней границей, и соответствует критериям
    alert("Welcome!");
  } else if (age > maxAge) {
    alert('Keep calm and look Culture channel');
  } 
} else {
  alert('Technical work');
}
