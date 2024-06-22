
let counter =  0;
let unit = 'bytes';
let bytes = 101414;

while (bytes >= 1024) {
  bytes = bytes / 1024;
  counter++;
}
switch (counter) {
  case 1: {
    unit = 'kb';
    break;
  }
  case 2: {
    unit = 'mb';
    break;
  }
  case 3: {
    unit = 'gb';
    break;
  }
  case 4: {
    unit = 'tb';
    break;
  }
}
console.log(`${bytes.toFixed(2)} ${unit}`);