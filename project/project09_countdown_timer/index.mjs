import inquirer from "inquirer";
import player from "play-sound";
const sound = player();
// Function to format time
function formatTime(time) {
    return time < 10 ? `0${time}` : `${time}`;
}
// Function to play buzzer sound from a local file
function playLocalBuzzerSound() {
    const soundPath = "./sound/alarm.wav"; // Adjust path as per your project structure
    sound.play(soundPath, (err) => {
        if (err) {
            console.error(`Error playing sound: ${err.message}`);
        }
        else {
            console.log("Buzzer sound played successfully.");
        }
    });
}
// Function to start the countdown
async function startCountdown(targetDate) {
    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate.getTime() - now;
        console.log("Distance:", distance); // Debug output
        if (distance <= 0) { // Adjust condition to <= 0 for accurate countdown completion
            clearInterval(interval);
            console.log("Countdown finished!");
            playLocalBuzzerSound(); // Play buzzer sound when countdown finishes
            return;
        }
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        console.log(`Time remaining: ${formatTime(days)}d ${formatTime(hours)}h ${formatTime(minutes)}m ${formatTime(seconds)}s`);
    }, 1000);
}
// Main function to setup the countdown
async function main() {
    const answers = await inquirer.prompt([
        {
            name: 'date',
            type: 'input',
            message: 'Enter the target date (YYYY-MM-DD):',
            validate: (input) => !isNaN(new Date(input).getTime()) ? true : 'Please enter a valid date.'
        },
        {
            name: 'time',
            type: 'input',
            message: 'Enter the target time (HH:MM):',
            validate: (input) => /^\d{2}:\d{2}$/.test(input) ? true : 'Please enter a valid time.'
        }
    ]);
    const [year, month, day] = answers.date.split('-').map(Number);
    const [hour, minute] = answers.time.split(':').map(Number);
    const targetDate = new Date(year, month - 1, day, hour, minute);
    console.log(`Countdown started for: ${targetDate}`);
    startCountdown(targetDate);
}
main();
