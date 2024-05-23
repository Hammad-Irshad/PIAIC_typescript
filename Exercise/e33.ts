// Array of numbers 1 through 9
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop through the array
for (let number of numbers) {
    // Determine the ordinal suffix based on the number
    let ordinal = "";
    if (number === 1) {
        ordinal = "st";
    } else if (number === 2) {
        ordinal = "nd";
    } else if (number === 3) {
        ordinal = "rd";
    } else {
        ordinal = "th";
    }
    
    // Print the number with its ordinal suffix
    console.log(number + ordinal);
}
