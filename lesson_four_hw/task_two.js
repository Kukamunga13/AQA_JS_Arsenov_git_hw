let minAge = 18;
let maxAge = 60;
let age = prompt('введите возраст');
let ageType = Number(age);

 switch (true) {
  case ageType < minAge: {
    alert('You do not have access cause your age is ' + age + " It's less then ");
    break;
  }
  case age >= minAge && age <= maxAge: {
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
