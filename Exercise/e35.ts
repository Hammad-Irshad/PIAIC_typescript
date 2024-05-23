// Array of animals with a common characteristic
const animals: string[] = ["Dog", "Cat", "Rabbit"];

// Print each animal name using a for loop
console.log("Printing animal names:");
for (let animal of animals) {
    console.log(animal);
}

// Print a statement about each animal
console.log("\nStatements about each animal:");
for (let animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

// Statement about common characteristic
console.log("\nAny of these animals would make a great pet!");
