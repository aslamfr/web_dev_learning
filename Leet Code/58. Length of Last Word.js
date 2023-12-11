function lastWord(s) {
  let len = s.length - 1, i = 0, end = true;
  
  while (len >=0) {
    if (s[len] !== ' ') end = false;
    if (!end) {
      if (s[len] === ' ') {
        break;
      }
      i += 1;
    }
    len -= 1;
  }
  return i;

  // return s.trim().split(" ").pop().length;
  // console.log(s);
  // let e = s.trim();
  // console.log(e);
  // e = e.split(" ");
  // console.log(e);
  // e = e.pop();
  // console.log(e);
  // return e.length;
  
}

let s = "   fly me   to   the moon  ";
console.log(lastWord(s));