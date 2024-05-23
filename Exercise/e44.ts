// Function to summarize sandwich order
function makeSandwich(...items: string[]): void {
    console.log("Sandwich order:");
    if (items.length === 0) {
        console.log("  - You didn't choose any items for your sandwich.");
    } else {
        items.forEach(item => {
            console.log(`  - ${item}`);
        });
    }
    console.log("Enjoy your sandwich!\n");
}

// Calling the function with different numbers of arguments
makeSandwich('lettuce', 'tomato', 'cheese');
makeSandwich('ham', 'bacon');
makeSandwich('turkey');
makeSandwich();  // No items provided
