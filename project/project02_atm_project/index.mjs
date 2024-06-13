// import inquirer from "inquirer";
// interface ansType {
//     userId: string,
//     userPin:number
// }
// const answer:ansType = await inquirer.prompt([
//     {
//         type: "input",
//         name: "userId",
//         message: "Kindly Enter your Id"
//     },
//     {
//         type: "number",
//         name: "userPin",
//         message: "Kindly Enter your PIN"
//     }
// ])
// console.log(answer)
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: "Kindly Enter your Id:"
    },
    {
        type: "number",
        name: "userPin",
        message: "Kindly Enter your PIN:"
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["fast cash", "withdraw"],
        message: "Select your transaction"
    },
    {
        type: "list",
        name: "amount",
        choices: [100, 2000, 5000, 10000, 20000],
        message: "Select your amount",
        when: (answers) => answers.transactionType === "fast cash"
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your amount",
        when: (answers) => answers.transactionType === "withdraw"
    },
]);
if (answers.userId && answers.userPin) {
    const balance = Math.floor(Math.random() * 1000);
    console.log(balance);
    const Enteramount = answers.amount;
    if (balance >= Enteramount) {
        const remaining = balance - Enteramount;
        console.log("remaining balance is", remaining);
    }
    else {
        console.log("insuficient BAlance");
    }
}
