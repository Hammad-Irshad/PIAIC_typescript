// Array of places to visit
const placesToVisit = ["Machu Picchu", "Santorini", "Kyoto", "Patagonia", "Galapagos Islands"];

// Print original array
console.log("Original Order:");
console.log(placesToVisit);

// Print array in alphabetical order without modifying the original list
console.log("\nAlphabetical Order:");
console.log([...placesToVisit].sort());

// Show original order is preserved
console.log("\nOriginal Order After Sorting:");
console.log(placesToVisit);

// Print array in reverse alphabetical order without modifying the original list
console.log("\nReverse Alphabetical Order:");
console.log([...placesToVisit].sort().reverse());

// Show original order is preserved
console.log("\nOriginal Order After Sorting in Reverse:");
console.log(placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();
console.log("\nReversed Order:");
console.log(placesToVisit);

// Reverse the order again to bring it back to the original order
placesToVisit.reverse();
console.log("\nOriginal Order After Reversing Again:");
console.log(placesToVisit);

// Sort the array in alphabetical order (modifies the original list)
placesToVisit.sort();
console.log("\nSorted in Alphabetical Order:");
console.log(placesToVisit);

// Sort the array in reverse alphabetical order (modifies the original list)
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("\nSorted in Reverse Alphabetical Order:");
console.log(placesToVisit);
