#! /usr/bin/cnv node 
import inquirer from "inquirer";
import { bank } from "./iBankAccount.js";

// let cust= await inquirer.prompt([
//     { name:"firstName",type:"string",message: "Enter Customer First Name :"},
//     { name:"lastName",type:"string",message: "Enter Customer Last Name :"},
//     { name:"gender",type:"string",message: "Enter Customer Gender :"},
//     { name:"age",type:"number",message: "Enter Customer Age :"},
//     { name:"mobileNo",type:"string",message: "Enter Customer Mobile No :"},
// ])

let cust = await inquirer.prompt([
    { name: "firstName", type: "input", message: "Enter Customer First Name :" },
    { name: "lastName", type: "input", message: "Enter Customer Last Name :" },
    { name: "gender", type: "list", message: "Enter Customer Gender :", choices: ['Male', 'Female','Other'] },
    { name: "age", type: "number", message: "Enter Customer Age :" },
    { name: "mobileNo", type: "input", message: "Enter Customer Mobile No :" }
]);




let customer = new bank.Customer();

customer.FirstName=cust.firstName;
customer.LastName=cust.lastName;
customer.Gender=cust.gender;
customer.Age=cust.age;
customer.MobileNumber=cust.mobileNo;
console.log(customer.CustomerInfo());
console.log("Balance in account")
console.log(customer.CustomerBalance());
console.log("Credit 5000 in account")
customer.bankAccount.Credit(5000);
console.log(customer.CustomerBalance());
console.log("Debit 2000 in account")
customer.bankAccount.Debit(2000);
console.log(customer.CustomerBalance());

