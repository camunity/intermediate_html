// print to the console
console.log("hello world!")

// ## Data Types
// variables
let name = "Cam"
let age = 320332.19392
let camIsTeaching = true

if(camIsTeaching !== true){
    console.log("it's lit!")
} else {
    console.log("🥺")
}

// Collections
let numbers = [12, 2323, 422424, 482842]
// console.log(numbers[0]);

let my_user = {
    "name": "Cam",
    "age": 27,    
}

console.log(my_user.name)
console.log(my_user["name"])

/*
// do {
//     console.log("random text")
// } while(camIsTeaching)
*/

// for (let index = 0; index < numbers.length; index++) {
//     const element = numbers[index];
//     console.log(element)
// }

for (element in numbers) {
    console.log(element)
}

// function say_hello(name){
//     console.log("Hello" + " " + name)
// }

say_hello = (name) => {
    console.log("Hello" + " " + name)
}

say_hello("Cam")
say_hello("World!")