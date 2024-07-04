import inquirer from "inquirer";
class QuizQA {
    constructor() {
        this.question = "";
        this.answer = "";
        this.options = [];
    }
}
let quizs = [
    { question: "What is the capital of France?", answer: "Paris", options: ["Berlin", "Madrid", "Paris", "Rome"] },
    { question: "Who wrote 'To Kill a Mockingbird'?", answer: "Harper Lee", options: ["Mark Twain", "Harper Lee", "J.K. Rowling", "Ernest Hemingway"] },
    { question: "What is the largest planet in our solar system?", answer: "Jupiter", options: ["Earth", "Mars", "Jupiter", "Saturn"] },
    { question: "What is the chemical symbol for gold?", answer: "Au", options: ["Ag", "Au", "Pb", "Fe"] },
    { question: "Who painted the Mona Lisa?", answer: "Leonardo da Vinci", options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"] },
    { question: "What is the smallest prime number?", answer: "2", options: ["1", "2", "3", "5"] },
    { question: "In what year did the Titanic sink?", answer: "1912", options: ["1905", "1912", "1918", "1925"] },
    { question: "Who developed the theory of relativity?", answer: "Albert Einstein", options: ["Isaac Newton", "Galileo Galilei", "Nikola Tesla", "Albert Einstein"] },
    { question: "What is the longest river in the world?", answer: "Nile", options: ["Amazon", "Yangtze", "Mississippi", "Nile"] },
    { question: "What is the hardest natural substance on Earth?", answer: "Diamond", options: ["Gold", "Iron", "Diamond", "Quartz"] },
    { question: "What does HTTP stand for?", answer: "HyperText Transfer Protocol", options: ["HyperText Transfer Protocol", "High Transfer Text Protocol", "Hyper Transfer Text Process", "High Text Transfer Process"] },
    { question: "What is the main function of an operating system?", answer: "To manage the computer's resources and facilitate the execution of tasks", options: ["To manage hardware", "To provide entertainment", "To manage the computer's resources and facilitate the execution of tasks", "To edit documents"] },
    { question: "What is the full form of RAM?", answer: "Random Access Memory", options: ["Random Access Memory", "Read Access Memory", "Rapid Access Memory", "Run Access Memory"] },
    { question: "Who is known as the father of computer science?", answer: "Alan Turing", options: ["Bill Gates", "Steve Jobs", "Alan Turing", "Charles Babbage"] },
    { question: "What is the primary function of a firewall?", answer: "To monitor and control incoming and outgoing network traffic based on security rules", options: ["To enhance graphics", "To monitor and control incoming and outgoing network traffic based on security rules", "To speed up the computer", "To store data"] },
    { question: "What is the name of the first electronic general-purpose computer?", answer: "ENIAC", options: ["ENIAC", "UNIVAC", "IBM 701", "ABC"] },
    { question: "What does 'GUI' stand for in computer science?", answer: "Graphical User Interface", options: ["Graphical User Interface", "General User Interface", "Global User Interface", "Graphical Universal Interface"] },
    { question: "In programming, what is a loop?", answer: "A sequence of instructions that repeats until a certain condition is met", options: ["A sequence of instructions that runs once", "A method to call a function", "A sequence of instructions that repeats until a certain condition is met", "A type of data structure"] },
    { question: "What is the full form of 'SQL'?", answer: "Structured Query Language", options: ["Simple Query Language", "Structured Query Language", "Sequential Query Language", "Standard Query Language"] },
    { question: "What is a commonly used programming language for web development?", answer: "JavaScript", options: ["Python", "C++", "JavaScript", "Ruby"] }
];
// Function to shuffle an array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
let questionAnswers = [];
let questionMarks = 10;
let answerMarks = 0;
let repeat = true;
while (repeat) {
    console.log("*********** Quiz System ***********");
    questionMarks = 10;
    answerMarks = 0;
    questionAnswers = [];
    // Shuffle the quiz array and take the first 10 questions
    let selectedQuestions = shuffle([...quizs]).slice(0, 10);
    for (let n = 0; n < selectedQuestions.length; n++) {
        console.log(`\n(${n + 1}) ${selectedQuestions[n].question}`);
        console.log("\n");
        let selOpt = await inquirer.prompt([{
                name: "Opt",
                type: "list",
                choices: selectedQuestions[n].options,
                message: "\t Please Select any Option ...."
            }]);
        questionAnswers.push(selOpt.Opt);
    }
    for (let m = 0; m < selectedQuestions.length; m++) {
        if (questionAnswers[m] == selectedQuestions[m].answer)
            answerMarks++;
    }
    console.log("\n");
    console.log(`You obtained ${answerMarks} out of ${questionMarks} marks.`);
    let percentage = (answerMarks / questionMarks) * 100;
    console.log(`Your percentage is ${percentage}%.`);
    let ans = await inquirer.prompt([{
            name: "isContinue",
            type: "confirm",
            message: "Do you want to continue? ...... (y/n): ",
            default: true
        }]);
    repeat = ans.isContinue;
}
console.log("Thank you for playing!");
