// Function to show magicians from an array
function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

// Function to modify magicians' names to include "the Great"
function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    magicians.forEach(magician => {
        great_magicians.push(`${magician} the Great`);
    });
    return great_magicians;
}

// Array of magician's names
let magician_names: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Make a copy of the magician_names array
let magician_names_copy: string[] = magician_names.slice();

// Call make_great to modify the magician_names_copy array
let great_magicians = make_great(magician_names_copy);

// Call show_magicians to display the original list of magicians
console.log("Original Magicians:");
show_magicians(magician_names);

// Call show_magicians to display the modified list of magicians
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
