function towNum(nums, target) {
  let index = {};
  // let array = [];
	
	for (let i = 0; i < nums.length; i++) {
    if (index[target - nums[i]] !== undefined) {
      // return [index[target - nums[i]], i];
      console.log(index[target - nums[i]], i)
    }
    index[nums[i]] = i;
  }
  console.log(index);
}

let nums = [3,3];
let target = 6;

towNum(nums,target);