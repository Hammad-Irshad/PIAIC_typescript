const guestList = ["Albert Einstein", "Maya Angelou", "Leonardo da Vinci"];

// Remove the guest who can't make it
const unableToAttend = guestList.splice(1, 1)[0];

// Add a new guest
guestList.push("Nelson Mandela");

console.log("Dear " + guestList[0] + ",\n\nI would be honored to have you join me for dinner. Your brilliance continues to inspire generations.\n\nBest regards,\n[Your Name]");

console.log("\nDear " + guestList[1] + ",\n\nYour genius and dedication to justice have inspired millions. I would be delighted if you could join me for dinner.\n\nWarm regards,\n[Your Name]");

console.log("\nDear " + guestList[2] + ",\n\nYour artistic vision and innovation have left an indelible mark on history. I would love to have the opportunity to share a meal and conversation with you.\n\nSincerely,\n[Your Name]");
