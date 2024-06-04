

for (let vertex = "*", counter = 0; counter < 6; counter++) {
    console.log(vertex.repeat(counter));
}

for (let vertex = "*", counter = 0; counter < 6; counter++) {
    console.log(vertex.repeat(counter));
    while (counter > 6 && counter != 0) {
     console.log(vertex.substring(0, counter));
     counter--;
    }
}
