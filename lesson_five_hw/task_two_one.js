
// Треугольник
const length = 5;
let vertex = " *";

for (let i = 0; i < length; i++) {
    console.log(vertex.repeat(i));
}

for ( let i = length; i >= 1; i-- ) {
    console.log(vertex.repeat(i));
    
}

// Ромб

const rows = 5
const stars = '*'
const absent = '-'

for(let i = 1; i <= rows; i++) {
 const offset = absent.repeat(rows - i + 1)
 const tt = i > 1 ? ' ' + stars : ''
 const tr =  stars + tt.repeat(i - 1)
 console.log(offset + tr + offset)
}

for(let i = 4; i >= 1; i--) {
    const offset = absent.repeat(rows - i + 1);
    const tt = i > 1 ? ' ' + stars : '';
    const tr = stars + tt.repeat(i-1);
    console.log(offset + tr + offset)
}






