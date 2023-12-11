function addBinary(a, b) {
  let al = a.length;
  let bl = b.length;
  let ans = [];
  let carry = 0;

  if (al > bl) {
    let diff = al - bl;
    for (let i = 1; i <= diff; i++) {
      b = "0" + b;
    }
  } else {
    let diff = bl - al;
    for (let i = 1; i <= diff; i++) {
      a = "0" + a;
    }
  }
  console.log(a);
  console.log(b);

  for (let i = a.length - 1; i >= 0; i--) {
    // console.log(carry);
    if (carry === 1 && ((a[i] === "1" && b[i] === "0") || (a[i] === "0" && b[i] === "1"))) {
      ans = "0" + ans;
      carry = 1;
      console.log("a1")
    } else if (carry === 1 && (a[i] === "0" && b[i] === "0")) {
      ans = "1" + ans;
      carry = 0;
      console.log("a2")
    } else if (carry === 1 && (a[i] === "1" && b[i] === "1")) {
      ans = "1" + ans;
      carry = 1;
      console.log("a3")
    } else if ((a[i] === "1" && b[i] === "0") || (a[i] === "0" && b[i] === "1")) {
      ans = "1" + ans;
      console.log("a4")
    } else if (a[i] === "1" && b[i] === "1") {
      ans = "0" + ans;
      carry = 1;
      console.log("a")
    } else {
      console.log("a5")
      ans = "0" + ans;
    }
    console.log(carry);
    console.log(ans);
  }
  if (carry === 1) {
    ans = "1" + ans;
  }
  console.log(carry);
  console.log(ans);
  return ans;
}

// using big int
function addBinary2(a, b) {
  return (BigInt("0b"+a) + BigInt("0b"+b)).toString(2);
}



let a = "1111";
let b = "1111";
// addBinary(a, b);
console.log(addBinary2(a,b))