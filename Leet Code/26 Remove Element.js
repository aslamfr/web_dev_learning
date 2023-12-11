function removeDuplicate(nums, val) {
  let n = nums.slice();

  for (let i=0; i<n.length; i++) {
    if (n[i] === val) {
      n[i] = null;
    }
  }
  n = n.filter((element) => element !== null)
  return n;
}

let nums = [0,0,1,1,1,1,2,2,3,3,4];
let val = 2;
console.log(removeDuplicate(nums, val));