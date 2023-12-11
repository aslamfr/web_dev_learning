function searchInsert(nums, target) {
  // binary search
  let hi = nums.length;
  let lo = 0;
  let mid, i;

  while (lo < hi) {
    mid = lo + Math.floor((hi-lo)/2);
    // state = [lo,mid,hi];
    if (target > nums[mid]) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
    // console.log(state);
  }
  return lo;
}

let nums = [1,2,3,6,7,8];
let target = 6;
// console.log(searchInsert(nums, target));
searchInsert(nums, target)