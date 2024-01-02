const input = document.querySelector('input');
const h1 = document.querySelector('h1');

input.addEventListener('input', function (e) {  
  // console.log('Input Event');
  // if (!this.value) {} // you can do it using this
  if (input.value === "" || input.value === " ") {
    h1.innerText = "Type Below:"; 
  } else {
    h1.innerText = input.value;
  }
  console.log(e);
});

