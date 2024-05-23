// Function to create a shirt with default size and message
function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`The shirt size is ${size} and it has the message: "${message}"`);
}

// Creating shirts using the default parameters
make_shirt();  // Large shirt with default message
make_shirt("Medium");  // Medium shirt with default message

// Creating a custom shirt
make_shirt("Small", "Hello, world!");  // Custom size and message
