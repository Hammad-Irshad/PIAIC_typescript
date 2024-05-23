// // Array of usernames
// let usernames = ['admin', 'Eric', 'Jessica', 'Michael', 'Sarah'];

// // Loop through the array and print greetings
// for (let username of usernames) {
//     if (username === 'admin') {
//         console.log("Hello admin, would you like to see a status report?");
//     } else {
//         console.log(`Hello ${username}, thank you for logging in again.`);
//     }
// }


// Array of usernames
let usernames = ['admin', 'Eric', 'Jessica', 'Michael', 'Sarah'];

// Loop through the array and print greetings
for (let i=0; i<5;i++) {
    if (usernames[i] === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
    }
}