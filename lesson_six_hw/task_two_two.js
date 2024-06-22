
// 2. Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра и выводит в консоль слово с наибольшим количеством букв. 
//   Если таких слов несколько - выводит их все.

function checkWordsLengthInSentence(sentence) {
  const sentenceArr = sentence.split(' ');
  const longWords = []; 
  let maxLength = 0;
  for ( i = 0; i < sentenceArr.length; i++) {
    if (sentenceArr[i].length >= maxLength) {
      maxLength = sentenceArr[i].length; 
    } 
  } 
  for (i = 0; i < sentenceArr.length; i++) {
    if (sentenceArr[i].length === maxLength) {
      longWords.push(sentenceArr[i]);
    }
  } 
  if (longWords.length > 1) {
    return longWords;
  } return longWords[0]; 
}

console.log(checkWordsLengthInSentence('Hi world testе test'));
