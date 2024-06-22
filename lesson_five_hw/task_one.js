
for (let startingNumber  = 10; startingNumber >= 0; startingNumber-- ) {
    console.log(startingNumber); 
}


for (let startingNumberForSmile = 0, smile = ''; startingNumberForSmile < 5; startingNumberForSmile++) {
    console.log(smile += ':)');
}

// Task 1.2 через while

let startingNumberForSmileForWhile = 0;
let smileForWhile = '';

while (startingNumberForSmileForWhile < 5) {
    console.log(smileForWhile += ':)');
    startingNumberForSmileForWhile++;
}

// Task 1.2 через метод repeat циклом for

for (let startingNumberForRepeat = 0, numberOfRepetitions = 1, smileForRepeat = ':)'; startingNumberForRepeat < 5; startingNumberForRepeat++, numberOfRepetitions++) {
    console.log(smileForRepeat.repeat(numberOfRepetitions));
}

//Task 1.2 через метод repeat циклом while

let startingNumberForRepeatForWhile = 0;
let numberOfRepetitionsForWhile = 1;
let smileForRepeatForWhile = ':)';

while (startingNumberForRepeatForWhile < 5) {
    console.log(smileForRepeatForWhile.repeat(numberOfRepetitionsForWhile));
    startingNumberForRepeatForWhile++;
    numberOfRepetitionsForWhile++;
}

