// singleton
// object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Satyam",
    "full name": "Satyam Kumar",
    [mySym]: "mykey1",
    age: 23,
    location: "Jaipur",
    email: "satyam@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Sunday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "satyam@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "satyam@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS user");
}
JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());