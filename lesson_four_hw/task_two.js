const minAge = 18;
const maxAge = 60;
const age = prompt('введите возраст');
const ageType = Number(age);

 switch (true) {
  case ageType < 0: {
    alert('возраст начинается с 0');
    break
  }
  case ageType < minAge: {
    alert('You do not have access cause your age is ' + age + " It's less then ");
    break;
  }
  case age >= minAge && age <= maxAge: { // специально проверяю age <= maxAge тк 60 это верхняя граница, которая тоже должна пропускать пользователя
    alert("Welcome!");
    break;
  }
  case age > maxAge: {
    alert('Keep calm and look Culture channel');
    break;
  }
  default: {
    alert('Это не число');
    break;
   }
 }
