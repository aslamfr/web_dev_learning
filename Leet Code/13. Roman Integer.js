function romanToInt(s) {
  const dict = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
  let i = 0;
  let sum = 0;

  while (i < s.length) {

    if (dict[s[i]] < dict[s[i+1]]) {
      sum += dict[s[i+1]] - dict[s[i]];
      i++; // to skip it
    } else {
      sum += dict[s[i]];
    }
    i++;
  }
  return sum;
}

let s = "MCMXCIV";
romanToInt(s);