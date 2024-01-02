const button = document.querySelector('button');
const rgbH2 = document.querySelector('h2');
const h1 = document.querySelector('h1');
var totalRGB;

button.addEventListener('click', function () {
  const newColor = randomColor();
  document.body.style.backgroundColor = newColor;
  rgbH2.innerText = newColor;
  if (totalRGB <= 280) {
    whiteText();
  } else {
    blackText();
  }
});

const randomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  totalRGB = r + g + b;
  return `rgb(${r}, ${g}, ${b})`;
}

const whiteText = () => {
  h1.style.color = "white";
  rgbH2.style.color = "white";
}

const blackText = () => {
  h1.style.color = "black";
  rgbH2.style.color = "black";
}