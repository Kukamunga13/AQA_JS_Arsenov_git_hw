
// const statBytes = 1000;

// let kb = statBytes / 1024;

// console.log(kb.toFixed(2) + " kb");

// let startMeaning = 1;
// let startNumber = Number(startMeaning);

// if (startNumber >= 1024) {
//   let kb = startNumber / 1024;
//   if (kb >= 1024) {
//     let mb = kb /1024;
//     if (mb >= 1024) {
//       let gb = mb / 1024;
//       if (gb >= 1024) {
//         let tb = gb / 1024;
//         console.log(tb.toFixed(2) + " tb");
//       } else {
//         console.log (gb.toFixed(2) + " gb");
//       }
//     } else {
//       console.log(mb.toFixed(2) + " mb");
//     }
//   } else {
//     console.log(kb.toFixed(2) + " kb");
//   }
// } else {
//   console.log(startNumber.toFixed(2) + " bytes");
// }

let counter =  0;
let unit = 'bytes';
let bytes = 2048576;

while (bytes >= 1024) {
  bytes = bytes / 1024;
  counter++
  console.log(counter);
}

switch (counter) {
  case 1: {
    let unit = 'kb';
    break;
  }
  case 1024: {
    let unit = 'mb';
    break;
  }
}
console.log(`${bytes.toFixed(2)} ${unit}`)
