const fs = require('fs');
const folderName = process.argv[2] || "Project";
// console.log(fs);

// fs.mkdir('Mememe', { recrusive: true}, (err) => {
//   console.log("This is async function");
//   if (err) throw err;
// });

try {
  fs.mkdirSync(folderName);
  fs.writeFileSync(`${folderName}/index.html`,'');
  fs.writeFileSync(`${folderName}/app.js`,'');
  fs.writeFileSync(`${folderName}/style.css`,'');
} catch (e) {
  console.log("File creation error");
  console,log(e);
}
// console.log("this is after mkdir");