import inquirer from "inquirer";
let convertion = {
    //IN PKR
    "PKR": {
        "PKR": 1,
        "USD": 0.0036,
        "GBP": 0.0028
    },
    //IN USD
    "USD": {
        "PKR": 278.6,
        "USD": 1,
        "GBP": 0.788
    },
    //IN GBP
    "GBP": {
        "PKR": 353.5,
        "USD": 1.26,
        "GBP": 1
    }
};
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "GBP"],
        message: "Select Your Currency"
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP"],
        message: "Select Your Convertion Currency"
    },
    {
        type: "number",
        name: "amount",
        message: "Enter Your Amount"
    }
]);
const { from, to, amount } = answer;
if (from && to && amount) {
    let result = convertion[from][to] * amount;
    console.log(`Your Convertion Currency From ${from} To ${to} Is ${result}`);
}
else {
    console.log("Please Enter Valid Input");
}
