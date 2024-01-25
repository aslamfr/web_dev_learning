const franc = require('franc');
const langs = require('langs');
const colors = require('colors');
// console.log(franc('Alle menslike wesens word vry'));

let langguageDetect = (input) => {
  if (langCode === 'und') return "Input is to short"

  let langName = langs.where("3", langCode).name;
  let langLocal = langs.where("3", langCode).local;
  return `Detected language: ${langName.green}, ${langLocal.blue}`
}

let langCode = franc(process.argv[2]);
console.log(langguageDetect(langCode));