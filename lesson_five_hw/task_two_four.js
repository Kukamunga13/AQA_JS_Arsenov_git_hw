
let originalProposal = 'Привет Мир Тест Первый ntcn тест Тест';
let brokenDownIntoWordsOriginalProposal = originalProposal.toLowerCase().split(" ");
let capitalizedOriginalProposal = brokenDownIntoWordsOriginalProposal.map(привет=> {
    return привет[0].toUpperCase() + привет.substring(1);
})
let stringCapitalizedOriginalProposal = capitalizedOriginalProposal.join(" "); 
let finelOriginalProposal = stringCapitalizedOriginalProposal.replaceAll(' ', '');
console.log(finelOriginalProposal[0].toLowerCase() + finelOriginalProposal.slice(1));




const fru = ["яблоко", "апельсин","арбуз","персик","дыня"];
const [firstFru, thirdFru] = fru;
console.log(firstFru);
console.log(thirdFru);