#! /usr/bin/cnv node 
import inquirer from "inquirer";
//import { Oops } from "./Person.js";
//import { Student } from "./Student.js";
import { Oops } from "./Person.js";
import { OopsS } from "./Student.js";

try {
let myValue = await inquirer.prompt([{name: "value", type:Number, message: "Type 1 if you want to talk other and type 2 if you would rather keep to yourself :"}]);

let myPerson:Oops.Person  = new Oops.Person();
console.log("You are "+myPerson.GetPersonality());
myPerson.AskedQuestion(myValue.value);
console.log("You are "+myPerson.GetPersonality());


let myName = await inquirer.prompt([{name: "value", type:Number, message: "What Is Your Name : "}]);

let student = new OopsS.Student();

student.name=myName.value; 

console.log("Your Name is "+student.name+ " and your personality is "+student.GetPersonality());
} 
catch (error) { console.log("Please Enter integer Values "+error)

} finally {

}