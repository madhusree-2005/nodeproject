import readline from "readline-sync";
console.log("========================");
console.log("======insta login========");
console.log("===========================")
let username = readline.question("enter your username : ") ;
let password = readline.question(" enter your password : ",{
    hideEchoBack : true,
});
let email = readline.questionEMail("what is your email : ");
 
let age = readline.questionInt("what is your age : ");
console.log(username,password,emailmail,age);