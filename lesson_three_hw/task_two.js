// общий вид квадратного уравнения аx2+bx+c=0
//x2-6x+9=0

let firstCoefficient;
let secondCoefficient;
let freeMember;
let rootOne;
let rootTwo;
let discriminant;

firstCoefficient = 1;
secondCoefficient = -6;
freeMember = 9;
discriminant = secondCoefficient ** 2 - 4 * firstCoefficient * freeMember;// тк приоритет возведения в степень 13, умножения 12, вычетания 11, присваивания 2, формула выдаст верное значение
rootOne = -secondCoefficient / 2 * firstCoefficient;
console.log('Ответ к уравнению 1: ' + rootOne);


//x2-4x-5=0

firstCoefficient = 1;
secondCoefficient = -4;
freeMember = -5;
discriminant = secondCoefficient ** 2 - 4 * firstCoefficient * freeMember;
rootOne = (-secondCoefficient + Math.sqrt(discriminant)) / (2 * firstCoefficient);
rootTwo = (-secondCoefficient - Math.sqrt(discriminant)) / (2 * firstCoefficient);
console.log('Ответ к уравнению 2: ' + rootOne +' и ' + rootTwo);
