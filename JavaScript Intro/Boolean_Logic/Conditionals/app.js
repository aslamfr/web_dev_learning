// =====================
// BASIC IF/ELSE
// =====================
let random = Math.random();
if (random < 0.5) {
    console.log(`YOUR NUMBER IS LESS THAN 0.5!!!. Your number is ${random}`);
} else {
    console.log(`YOUR NUMBER IS GREATER (OR EQUAL) THAN 0.5!!!. Your number is ${random}`);
}
console.log(random);

// =====================
// PROMPT EXAMPLE
// =====================

const dayOfWeek = prompt('ENTER A DAY').toLowerCase();

if (dayOfWeek === 'monday') {
    console.log("Monday....!");
} else if (dayOfWeek === 'saturday') {
    console.log("Sleep.");
} else if (dayOfWeek === 'friday') {
    console.log("it's Friday");
} else {
    console.log("Mood");
}



// =====================
// TICKET PRICE EXAMPLE
// =====================

// 0-5 - FREE
// 5 - 10 CHILD $10 
// 10 - 65 ADULT $20 
// 65+ SENIOR $10

const age = 890;

if (age < 5) {
    console.log("You are a baby.  You get in for free!");
} else if (age < 10) {
    console.log("You are a child.  You pay $10");
} else if (age < 65) {
    console.log("You are an adult. You pay $20");
} else {
    console.log("You are a senior. You pay $10");
}


// =====================
// NESTING CONDITIONALS
// =====================

const password = prompt("please enter a new password");

// Password must be 6+ characters
if (password.length >= 6) {
    // Password cannot include space
    if (password.indexOf(' ') === -1) {
        console.log("Valid Password!");
    } else {
        console.log("Password cannot contain spaces!");
    }
} else {
    console.log("Invalid password");
}



