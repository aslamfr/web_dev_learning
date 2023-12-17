
// setTimeout
console.log("Hello!!")
setTimeout(() => {
    console.log("Hey!!");
}, 3000);

console.log("Goodbye")

// setInterval
const interval = setInterval(() => {
    console.log(Math.random())
}, 2000);

clearInterval(interval); // stop setInterval
