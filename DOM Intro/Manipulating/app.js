// const allLinks = document.querySelectorAll('a');

// // for (let link of allLinks) {
// //     link.innerText = 'I AM A LINK!!!!'
// // }


// for (let link of allLinks) {
//     link.style.color = 'rgb(0, 108, 134)';
//     link.style.textDecorationColor = 'magenta';
//     link.style.textDecorationStyle = 'wavy'
// }

const allLinks = document.querySelectorAll("a");

for (let link of allLinks) {
    link.innerText = "this is a link!"
}

document.querySelector("h1").innerText = "<i>Silkie Chikens</i>" // only change its text
document.querySelector("h1").innerHTML = "<i>Silkie Chikens</i>" // change its html element
document.querySelector("h1").innerHTML += "<b> Silkie Chikens</b>" // add a html element

