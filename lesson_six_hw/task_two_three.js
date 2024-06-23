
// 3. Напишите функцию, которая принимает на вход массив чисел, убирает из него дубликаты и возвращает массив с только уникальными значениями.
const arrNumbers = [1,1,1,2,3,2,4,5,5, 4, 6];
function checkDuplicateNumbers(arr) {
  const numbersWithoutDuplicates = [];
  for (i = 0; i < arr.length; i++) {
    if (!numbersWithoutDuplicates.includes(arr[i])) {
      numbersWithoutDuplicates.push(arr[i]);
    }
  } return numbersWithoutDuplicates;
}
console.log(checkDuplicateNumbers(arrNumbers));

