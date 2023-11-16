// if/else version of code

// ball = 45;

// if (ball <= 100 && ball >= 86) {
//     console.log("A");
// } else if (ball <= 85 && ball >= 61) {
//     console.log("B");
// } else if (ball <= 60 && ball >= 51) {
//     console.log("C");
// } else {
//     console.log("Failed");
// }

// switch version of code

// let ball = 100;

// switch (ball) {
//     case (ball <= 100 && ball >= 86): console.log("A");
//     case 1: console.log("A"); break;
//     case 2: console.log("B"); break;
//     case 3: console.log("C"); break;
//     default: console.log("Failed"); break;
// }

// ternary version of code 

let ball = 110;

ball <= 100 && ball >= 86 ? console.log('A') : ball <= 85 && ball >= 61 ? console.log('B') : ball <= 60 && ball >= 51 ? console.log('C') : console.log('Failed');
