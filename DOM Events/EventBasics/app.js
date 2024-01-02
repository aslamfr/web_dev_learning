const btn2 = document.querySelector('#btn2');

btn2.onclick = function () {
    console.log("Button 2 is clicked");
}

function mEnter() {
    console.log("entering button 2");
}

btn2.onmouseenter = mEnter;

document.querySelector('h1').onclick = () => {
    console.log("h1 is clicked");
}

// Event listener
const btn3 = document.querySelector('#btn3');

btn3.addEventListener('click', () => {
    console.log('Button 3 is clicked');
});

function twist() {
    console.log("TWIST");
}

function shout() {
    console.log("SHOUT");
}

const btn4 = document.querySelector("#btn4");

// btn4.onclick = twist;
// btn4.onclick = shout;

btn4.addEventListener('click', twist, {once: true});
btn4.addEventListener('click', shout);