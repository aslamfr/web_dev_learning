// change content
const allLinks = document.querySelectorAll("a");

for (let link of allLinks) {
    link.innerText = "this is a link!"
}

document.querySelector("h1").innerText = "<i>Silkie Chikens</i>" // only change its text
document.querySelector("h1").innerHTML = "<i>Silkie Chikens</i>" // change its html element
document.querySelector("h1").innerHTML += "<b> Silkie Chikens</b>" // add a html element

// change style
for (let link of allLinks) {
    link.style.color = "rgb(0, 108, 134)";
    link.style.textDecorationColor = "magenta";
}

// window.getComputedStyle(h1).color // get current styles of an element

// manipulating class
const h2 = document.querySelector("h2");

// h2.setAttribute('class', 'purple border'); // this change the element whole class
h2.classList.add('purple');
h2.classList.add('border');
// h2.classList.remove('border'); // you can also remove a class
setTimeout (() => {
    h2.classList.toggle('purple'); // toggle the selected class
}, 3000);

// adding an element
// appendChild method
const newImg = document.createElement('img');

newImg.src = 'https://as2.ftcdn.net/v2/jpg/01/37/59/13/1000_F_137591308_0vlMw4ZqwzqBAF7EWA0e3uVz9pmAPJiG.jpg';
newImg.classList.add('square');
document.body.appendChild(newImg);

// append method
const p = document.querySelector('p');

p. append(' This is a new text in this paragraph.');

// prepend method
const newB = document.createElement('b');

newB.append('Hi!!! ');
p.prepend(newB);

// insertAdjacentElement method
const h2_2 = document.createElement('h2');
const h1 = document.querySelector('h1');
const h3 = document.createElement('h3');

h2_2.append("This is a New H2");
h3.innerText = "This is a New H3"
h1.insertAdjacentElement("afterend", h2_2);
h2_2.after(h3);

// remove element
// removeChild method
const firstLi = document.querySelector('li');
// const ul = firstLi.parentElement;

// ul.removeChild(firstLi);
firstLi.parentElement.removeChild(firstLi);

// remove method
const img = document.querySelector('img');

img.remove();