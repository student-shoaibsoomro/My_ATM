import inquirer from "inquirer";
let userId = "ss";
let userPin = 1234;
let myAccount = 25000;
console.log("Welcome to my ATM (Automatic Teller Machine)");
let answer = await inquirer.prompt([
    {
        name: "userId",
        message: "Please enter userId",
        type: "string",
    },
    {
        name: "userPin",
        message: "Please enter userPin",
        type: "number",
    }
]);
if (answer.userId === userId && answer.userPin === userPin) {
    console.log("Congratulations your ID and Pin is Correct!!!");
}
else {
    console.log("Your ID or Pin is Incorrect Please try again.");
}
if (answer.userId === userId && answer.userPin === userPin) {
    let accountAns = await inquirer.prompt([
        {
            name: "accountTitle",
            message: "Please selec your Account",
            type: "list",
            choices: ["Current Account", "Saving Account"]
        },
    ]);
    if (accountAns.accountTitle === "Current Account") {
        let optionAns = await inquirer.prompt([
            {
                name: "option",
                message: "Please select one option",
                type: "list",
                choices: ["Fast Cash", "Withdrew", "Check Balance"]
            }
        ]);
        if (optionAns.option === "Withdrew") {
            console.log("Please type amount.");
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    message: "Please type amount",
                    type: "number",
                }
            ]);
            if (amountAns.amount > myAccount) {
                console.log("Sorry your transiction cannot be succeed please check your balance.");
            }
            else {
                myAccount -= amountAns.amount;
                console.log(`${amountAns.amount} has been deducted from your account`);
                console.log(`Your remaining balance is ${myAccount} Thank You!!`);
            }
        }
        if (optionAns.option === "Fast Cash") {
            let fastAns = await inquirer.prompt([
                {
                    name: "fastCash",
                    message: "Please select one amount",
                    type: "list",
                    choices: ["1000", "2000", "5000", "10000", "15000", "20000"]
                }
            ]);
            myAccount -= fastAns.fastCash;
            console.log(`${fastAns.fastCash} has been deducted from your account`);
            console.log(`Your remaining balance is ${myAccount} ThankYou!!`);
        }
        if (optionAns.option === "Check Balance") {
            console.log(`Your balance is ${myAccount}`);
        }
    }
    else {
        console.log("Sorry it is forbidden(Haram) in Islam to take interest.");
    }
}
