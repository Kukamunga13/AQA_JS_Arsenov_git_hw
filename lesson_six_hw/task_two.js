// 1. У вас есть массив названий пицц вашего конкурента. Создайте функцию, которая будет принимать ваш набор названий пицц (массив) 
//   и возвращать только те, которых нет у конкурента (тоже массив). Если все ваши пиццы есть у конкурента - вернуть null
//   Пиццы конкурента:
//   const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']

const myPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai', 'test pizza'];

function checkPizzas(myPizzas) {
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
  const noCompetitor = []; 
    for ( i = 0; i < myPizzas.length; i++ ) {
      if (myPizzas[i] != competitorPizzas[i]) {
        noCompetitor.push(myPizzas[i]);
      }
    } 
    if (noCompetitor.length === 0) {
      return null;
     } return noCompetitor;

}
console.log(checkPizzas(myPizzas));
