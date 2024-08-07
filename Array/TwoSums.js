// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

const nums = [2, 7, 11, 15];
const nums2 = [3,2,4]
const nums3 = [3,3]
const target = 9;
const target1 = 6
const target2 = 6

function TwoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        // console.log(nums[i] , nums[j],"(nums[i] + nums[j]")
        return [i , j]
      }
    }
  }
  return [];
}
TwoSum(nums2, target1);
console.log(TwoSum(nums, target));  // Output: [0, 1]
console.log(TwoSum(nums2, target1)); // Output: [1, 2]
console.log(TwoSum(nums3, target2)); // Output: [0, 1]
