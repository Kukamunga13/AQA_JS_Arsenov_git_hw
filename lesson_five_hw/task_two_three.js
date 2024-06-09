
for (let i = 1; i <= 100; i++) {
    switch(true) {
        case i % 3 == 0 && i % 5 != 0: {
            console.log("Число " + i + " делится на 3");
            break;
        }
        case i % 3 != 0 && i % 5 == 0: {
            console.log("Число " + i +  " делится 5");
            break;
        }
        case i % 3 == 0 && i % 5 == 0: {
            console.log("Число " + i + " делится на 3 и на 5");
            break;
        }
        default: 
        console.log(i);
    }
}





