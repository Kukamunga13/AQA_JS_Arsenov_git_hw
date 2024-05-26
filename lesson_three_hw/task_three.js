
  let numberEnteredByTheUser = prompt('введите число');
  const dataType = Number(numberEnteredByTheUser);
  
  if (dataType / 1 > 0) {
    if (Number.isInteger(dataType)) {
        alert(numberEnteredByTheUser  + ' ' + String(numberEnteredByTheUser) + String(numberEnteredByTheUser) + ' ' + String(numberEnteredByTheUser) + String(numberEnteredByTheUser) + String(numberEnteredByTheUser)); 
    } else {
      alert('Введите целое число');
    } 
  } else {
    alert('Введите целое, положительное число');
  }
  



