// 1. На вход функции подаётся предложение, например “I am the best AQA ever!” Преобразуйте строку таким образом, 
//   чтобы вместо каждой буквы была цифра, показывающая сколько раз эта буква встречается в предложении. 
//   Пробелы и знаки препинания оставляем без изменения. Регистр не должен играть роли.

const { count } = require("console");

//  function checkRepetitionLetters (Sentence) {
//   const SentenceArr = Sentence.split('');
//   const uniqueLetters = [];  
//   const result = [];
//   counter = 1;
//   for(letter of SentenceArr) {
//     if (!uniqueLetters.includes(letter)) {
//       uniqueLetters.push(letter);
//       result.push(counter);
//     } else {
//       counter++;
//       result.push(counter);
//     }
//   } return counter; 
// } 

// console.log(checkRepetitionLetters('Привет мир'));


let n = 0;
for (const c of 'Moloko') {
  if (c === 'o') n++;
}
console.log(n)


function checkRepetitionLetters (sentence) {
  const sentenceArr = sentence.split('');
  counter = 0;
  for(letter of sentenceArr) {
    if (letter === sentenceArr) {
      counter++
    }
  } return counter; 
} 

console.log(checkRepetitionLetters('Привет мир'));


 

