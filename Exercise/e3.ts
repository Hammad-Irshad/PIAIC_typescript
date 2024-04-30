let person_case = "Hammad, Learning typescript";

function toTitleCase(str: string): string {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

console.log(`Lowercase: ${person_case.toLowerCase()}`);
console.log(`Uppercase: ${person_case.toUpperCase()}`);
console.log(`Titlecase: ${toTitleCase(person_case)}`);