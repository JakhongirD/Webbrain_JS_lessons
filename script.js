
// No 1

// let obj = {
//     id: 1,
//     name: "WebBrain"
// }

// console.log(Object.keys(obj));

// No 2

// let obj = {
//     id: 1,
//     name: "WebBrain",
// };

// for (let key in obj) {
//     if (typeof obj[key] === 'number') {
//         console.log(`${key}`);
//     }
// }

// No 3 

// let obj = {
//     id: 1,
//     name: "WebBrain",
//     offline: true,
//     online: true,
//     individual: false
// }

// for (let key in obj) {
//     if (typeof obj[key] === 'boolean') {
//         console.log(`${key}: ${obj[key]}`);
//     }
// }

// No 4

// let person = {
//     id: 1,
//     name: 'Umar',
//     surname: 'Ismoilov',
//     ielts: 5.5,
//     student: true,
//     kalitsuz: 104
// }

// function kirish(login, password) {
//     if (login === person.name && password === person.kalitsuz) {
//         return 'Xush kelibsiz!';
//     } else {
//         return 'Login yoki kalitsuzda xatolik bor!';
//     }
// }

let kalitsuz = 101;
let name = 'Umar';

let result = kirish(name, kalitsuz)

console.log(result);









