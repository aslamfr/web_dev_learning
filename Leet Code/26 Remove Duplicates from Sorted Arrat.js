function removeDuplicate(nums) {
  let n = nums.slice();
  let a = [];

  for (let i=0; i<n.length; i++) {
    if (n[i+1] !== n[i]) {
      a.push(n[i]);
    }
  }
  return a;
}

let nums = [0,0,1,1,1,1,2,2,3,3,4];
console.log(removeDuplicate(nums));