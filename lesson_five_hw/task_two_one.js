
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
const indentation = '-'

for(let i = 1; i <= rows; i++) {
 const indentationForDrawing = indentation.repeat(rows - i + 1)
 const starWithSpace = i > 1 ? ' ' + stars : ''
 const starsInDrawing =  stars + starWithSpace.repeat(i - 1)
 console.log(indentationForDrawing + starsInDrawing + indentationForDrawing)
}

for(let i = 4; i >= 1; i--) {
    const indentationForDrawing = indentation.repeat(rows - i + 1);
    const starWithSpace = i > 1 ? ' ' + stars : '';
    const starsInDrawing = stars + starWithSpace.repeat(i-1);
    console.log(indentationForDrawing + starsInDrawing + indentationForDrawing)
}




