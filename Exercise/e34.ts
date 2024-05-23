// Array of favorite pizza types
const pizzas: string[] = ["Pepperoni", "Margherita", "BBQ Chicken"];

// Print each pizza name using a for loop
console.log("Printing pizza names:");
for (let pizza of pizzas) {
    console.log(pizza);
}

// Print a sentence using each pizza name
console.log("\nPrinting sentences about pizza:");
for (let pizza of pizzas) {
    console.log(`I like ${pizza} pizza.`);
}

// Additional statement about loving pizza
console.log("\nI really love pizza!");
