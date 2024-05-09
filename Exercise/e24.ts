let name = 'Alice';
let age = 30;
let fruits = ['apple', 'banana', 'orange'];

// Tests for equality and inequality with strings
console.log("Is name equal to 'Alice'? I predict True.");
console.log(name == 'Alice');

console.log("Is name not equal to 'Bob'? I predict True.");
console.log(name != 'Bob');

// Tests using the lower case function
console.log("Is name in lowercase equal to 'alice'? I predict True.");
console.log(name.toLowerCase() == 'alice');
    
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Is age equal to 30? I predict True.");
console.log(age == 30);

console.log("Is age not equal to 25? I predict True.");
console.log(age != 25);

console.log("Is age greater than 25? I predict True.");
console.log(age > 25);

console.log("Is age less than or equal to 30? I predict True.");
console.log(age <= 30);

// Tests using "and" and "or" operators
console.log("Is age greater than 25 and less than 40? I predict True.");
console.log(age > 25 && age < 40);

console.log("Is age less than 20 or greater than 50? I predict False.");
console.log(age < 20 || age > 50);

// Test whether an item is in an array
console.log("Is 'banana' in the fruits array? I predict True.");
console.log(fruits.includes('banana'));

// Test whether an item is not in an array
console.log("Is 'grape' not in the fruits array? I predict True.");
console.log(!fruits.includes('grape'));
