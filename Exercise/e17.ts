const myName = "Hammad";

const guestList = ["Albert Einstein", "Maya Angelou", "Leonardo da Vinci", "Nelson Mandela", "Marie Curie", "Steve Jobs", "Rosa Parks"];

console.log("Dear " + guestList[0] + `,\n\nI would be honored to have you join me for dinner. Your brilliance continues to inspire generations.\n\nBest regards,\n${myName}`);

console.log("\nDear " + guestList[1] + `,\n\nYour dedication to justice and equality is an inspiration to us all. I would be delighted if you could join me for dinner.\n\nWarm regards,\n${myName}`);

console.log("\nDear " + guestList[2] + `,\n\nYour genius and artistic vision have left an indelible mark on history. I would love to have the opportunity to share a meal and conversation with you.\n\nSincerely,\n${myName}`);

console.log("\nUnfortunately, " + guestList[1] + " can't make it to the dinner.\n");

// Replace the unable guest with a new one
guestList.splice(1, 1, "Nelson Mandela");

console.log("Dear " + guestList[0] + `,\n\nI would be honored to have you join me for dinner. Your brilliance continues to inspire generations.\n\nBest regards,\n${myName}`);

console.log("\nDear " + guestList[1] + `,\n\nYour dedication to justice and equality is an inspiration to us all. I would be delighted if you could join me for dinner.\n\nWarm regards,\n${myName}`);

console.log("\nDear " + guestList[2] + `,\n\nYour genius and artistic vision have left an indelible mark on history. I would love to have the opportunity to share a meal and conversation with you.\n\nSincerely,\n${myName}`);

console.log("\nGreat news! We found a bigger dinner table!");

// Add one new guest to the beginning of the array
guestList.unshift("Marie Curie");

// Add one new guest to the middle of the array
guestList.splice(Math.floor(guestList.length / 2), 0, "Steve Jobs");

// Add one new guest to the end of the array using append()
guestList.push("Rosa Parks");

console.log("\nNew Invitation Messages:");

guestList.forEach(guest => {
    console.log("\nDear " + guest + `,\n\nI'm thrilled to invite you to dinner. Your presence would make the evening truly special.\n\nWarm regards,\n${myName}`);
});

console.log("\nOops! The new dinner table won't arrive in time, so we can only invite two guests.");

// Informing about the limitation
console.log("\nSorry, we can only accommodate two guests for dinner.");

// Removing guests until only two names remain
while (guestList.length > 2) {
    const removedGuest = guestList.pop();
    console.log("\nSorry, " + removedGuest + ", we won't be able to accommodate you for dinner.");
}

// Confirming invitation to remaining guests
console.log("\nInvitation Messages to Remaining Guests:");
guestList.forEach(guest => {
    console.log("\nDear " + guest + ",\n\nYou're still invited to dinner. Looking forward to seeing you!\n\nWarm regards,\n" + myName);
});

// Removing the last two names from the list
guestList.pop();
guestList.pop();

// Printing to ensure an empty list
console.log("\nUpdated Guest List:");
console.log(guestList); // Should print an empty list
