
function getEmployeeInfo(name) {
  const employeeNames = ['Andrey', 'Dmitriy', 'Anastasia', 'Anna', 'Olga'];
  const employeeSalaries = [1000, 2000, 3000, 4000, 5000];
  const nameIndex = employeeNames.indexOf(name);
  
  if ( nameIndex >= 0) {
    const workerSalaries = employeeSalaries[nameIndex];
    const employeeIncome = [];
    employeeIncome.push(name,workerSalaries);
    return employeeIncome;
  } 
    return null;
}
console.log(getEmployeeInfo('Olga'));
