function removeDuplicate(nums, val) {
  let n = nums.slice();

  for (let i=0; i<n.length; i++) {
    if (n[i] === val) {
      n[i] = null;
    }
  }
  n = n.filter((element) => element !== null)
  // return n;

  for (let i=0; i<n.length; i++) {
    k = n[i]
    return k;
  }
}

let nums = [3,2,2,3];
let val = 3;
console.log(removeDuplicate(nums, val));