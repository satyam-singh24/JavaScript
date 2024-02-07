function sayMyNmae() {
    console.log("S");
    console.log("A");
    console.log("T");
    console.log("Y");
    console.log("A");
    console.log("M");
}

// sayMyNmae()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // console.log("Satyam");
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "satyam") {
    if(username === undefined) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("satyam"))
console.log(loginUserMessage());