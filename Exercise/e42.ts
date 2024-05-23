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

// Call make_great to modify the magician_names array
let great_magicians = make_great(magician_names);

// Call show_magicians to display the modified list of magicians
show_magicians(great_magicians);
