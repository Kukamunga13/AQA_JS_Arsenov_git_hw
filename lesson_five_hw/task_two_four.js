
let originalProposal = 'Hello World Test First ntcn test Test';
let brokenDownIntoWordsOriginalProposal = originalProposal.toLowerCase().split(" ");
let capitalizedOriginalProposal = brokenDownIntoWordsOriginalProposal.map(привет=> {
    return привет[0].toUpperCase() + привет.substring(1);
})
let stringCapitalizedOriginalProposal = capitalizedOriginalProposal.join(" "); 
let finelOriginalProposal = stringCapitalizedOriginalProposal.replaceAll(' ', '');
console.log(finelOriginalProposal[0].toLowerCase() + finelOriginalProposal.slice(1));