const firstRecurringNumber = (nums) => {
  const myMap = new Map();
  let result;
  for(let i = 0; i < nums.length; i++) {
    if(myMap.has(nums[i])) {
      if(result === undefined) {
        result = nums[i];
      } else {
        if(myMap.get(result) > myMap.get(nums[i])) result = nums[i];
      }
    } else {
      myMap.set(nums[i], i);
    }
  }
  return result;

  // const myMap = new Map();
  // for(const num of nums) {
  //   if(myMap.has(num)) {
  //     return num;
  //   } else {
  //     myMap.set(num, true);
  //   }
  // }
  // return undefined;
}

// Test
console.log(firstRecurringNumber([2,5,1,2,3,5,1,2,4])); // 2
console.log(firstRecurringNumber([2,5,5,2,3,5,1,4,4])); // 2
console.log(firstRecurringNumber([7,5,1,2,3,5,1,2,4])); // 5
console.log(firstRecurringNumber([7,9,1,2,3,5,1,2,4])); // 1
console.log(firstRecurringNumber([1,2,3,4,5])); // undefiined