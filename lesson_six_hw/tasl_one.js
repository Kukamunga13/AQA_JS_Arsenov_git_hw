// 1. Создайте функцию getEmployeeInfo()
// 2. В функции создайте массив имен сотрудников 5шт (Имена придумать самим)
// 3. В функции создайте массив зарплат сотрудников 5 шт(цифры придумать самим)
// 4. Функция должна принимать 1 аргумент - имя сотрудника
// 5. Функция должна возвращать новый массив, где первый элемент - имя сотрудника, второй - его зарплата
// 6. Для поиска ответа функции нужно найти индекс сотрудника в массиве имен. Зарплату взять с ТЕМ ЖЕ индексом что и имя
// 7. Для возврата из функции создайте массив, методом .push поместите в него имя и зарплату, и через return верните созданный массив
// 8. Если такое имя сотрудника в массиве не найдется - вернуть null





// const employeeNames = ['Andrey', 'Dmitriy', 'Anastasia', 'Anna', 'Olga'];
// const employeeSalaries = [1000, 2000, 3000, 4000, 5000];

const startName = 'Andrey'; 

function getEmployeeInfo(name) {
  const employeeNames = ['Andrey', 'Dmitriy', 'Anastasia', 'Anna', 'Olga'];
  const employeeSalaries = [1000, 2000, 3000, 4000, 5000];
  console.log(employeeNames.indexOf);
}

getEmployeeInfo (startName);

// getEmployeeInfo (employeeNames);

for (const nameWorker of employeeNames) {
  console.log(nameWorker.indexOf);
} 

for (const manyWorker of employeeSalaries) {
  console.log (manyWorker);
}
// console.log(employeeNames[2]);
// console.log(employeeSalaries[3]);
// newArr = [employeeNames[0] + " " + employeeSalaries[0]];
// console.log(newArr);

// for (nameWorker of employeeNames) {
//   console.log (nameWorker[2]);
// }


