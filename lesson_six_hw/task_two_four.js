
// 4. Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом

function checkForPalindrome (word) {
  const wordArr = word.split('');
  const wordArrFlippedOver = word.split('').reverse();
  let мessage;
  let result = true;

  for (i = 0; i < wordArr.length; i++) {
    if (wordArr[i] != wordArrFlippedOver[i]) {
      result = false;
      break;
    }
  } 
  if (result === true) {
    message = 'This is a palindrome';
  } else {
    message = 'This is not a palindrome';
  }
  return message;
}
 console.log(checkForPalindrome('шалаш'));
