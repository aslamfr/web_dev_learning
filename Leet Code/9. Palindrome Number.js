function isPalindrome(x) {
  // let y = [];
  // let z = String(x);
  // let j = z.length-1;

  // for (let i = 0; i < z.length; i++) {
  //   y[i] = z[j];
  //   j--;
  // }
  // y = y.join('');
  // // console.log(y);

  // if (y === z) {
  //   return true;
  //   // console.log(true);
  // } else {
  //   return false;
  //   // console.log("false");
  // }

  // Better Solution 
  var reverse = 0;
  var copy = x;

  while (copy > 0) {
    const digit = copy % 10;
    reverse = reverse * 10 + digit;
    copy = ~~(copy / 10);
  }

  return reverse == x;
}

let input = 121;
isPalindrome(input);