// 1. У вас есть массив названий пицц вашего конкурента. Создайте функцию, которая будет принимать ваш набор названий пицц (массив) 
//   и возвращать только те, которых нет у конкурента (тоже массив). Если все ваши пиццы есть у конкурента - вернуть null
//   Пиццы конкурента:
//   const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  
// 2. Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра и выводит в консоль слово с наибольшим количеством букв. 
//   Если таких слов несколько - выводит их все.

// 3. Напишите функцию, которая принимает на вход массив чисел, убирает из него дубликаты и возвращает массив с только уникальными значениями.

// 4. Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом


//1. сравнения моих пицц с пиццами конкурентов
// const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
// const myPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];

const myPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];

function checkPizzas(myPizzas) {
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
    const noCompetitor = []; 
    for ( i = 0; i < myPizzas.length; i++ ) {
      if (myPizzas[i] != competitorPizzas[i]) {
        noCompetitor.push(myPizzas[i]);
        return noCompetitor;
      } 
      return null;
    }
 }
console.log(checkPizzas(myPizzas));