// 1. Создайте функцию getOnlyNumbers, принимающую на вход массив arrayOnAnyValues
// 2. Внутри функции создайте переменную result, в которую упадет результат работы метода .filter()
// 3. В метод filter передайте callback функцию, проверяющую является ли значение числом.
// 4. В переменной result должны остаться только те элементы массива arrayOnAnyValues, которые являются числами ('2' - не число)
// 5. Вернуть result из функции

function getOnlyNumbers(arrayOnAnyValues) {
  const result = arrayOnAnyValues.filter(meaning => Number.isNaN(meaning)); 
  return result;
} 

console.log(getOnlyNumbers([1, NaN, true, 5, 'hellow', undefined, 15.5, {}, []]));
