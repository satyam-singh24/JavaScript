// Primitive datatypes:-

//7 types: String, Number, Boolean, null, undefined, Symbol, Bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 36786782334567543456n


// Reeference datatypes(Non primitive) :-
// Array, Objects, Functions

const heros = ["army", "navy", "nsg"]
let myObj = {
    name: "Satyam",
    age: 23,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof Symbol);