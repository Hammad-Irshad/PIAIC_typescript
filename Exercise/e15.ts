const myName = "Hammad"

const guestList = ["Albert Einstein", "Maya Angelou", "Leonardo da Vinci"];

console.log("Dear " + guestList[0] + `,\n\nI would be honored to have you join me for dinner. Your brilliance continues to inspire generations.\n\nBest regards,\n${myName}`);

console.log("\nDear " + guestList[1] + `,\n\nYour wisdom and poetry have touched countless lives. I would be delighted if you could join me for dinner.\n\nWarm regards,\n${myName}`);

console.log("\nDear " + guestList[2] + `,\n\nYour genius and artistic vision have left an indelible mark on the world. I would love to have the opportunity to share a meal and conversation with you.\n\nSincerely,\n${myName}`);

// Guest who can't make it
const unableToAttend = guestList.splice(1, 1)[0];
console.log("\nUnfortunately, " + unableToAttend + " can't make it to the dinner.\n");

// Replace the unable guest with a new one
guestList.push("Nelson Mandela");

// Sending invitations again
console.log("Dear " + guestList[0] + `,\n\nI would be honored to have you join me for dinner. Your brilliance continues to inspire generations.\n\nBest regards,\n${myName}`);

console.log("\nDear " + guestList[1] + `,\n\nYour dedication to justice and equality is an inspiration to us all. I would be delighted if you could join me for dinner.\n\nWarm regards,\n${myName}`);

console.log("\nDear " + guestList[2] + `,\n\nYour genius and artistic vision have left an indelible mark on history. I would love to have the opportunity to share a meal and conversation with you.\n\nSincerely,\n${myName}`);
