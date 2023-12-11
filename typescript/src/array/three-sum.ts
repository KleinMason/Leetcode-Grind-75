function threeSum(nums: number[]): number[][] {
  nums = nums.sort((a, b) => a - b);

  let satisfactoryTriples: number[][] = [];

  for (let i = 0; i < nums.length - 2; i++) {
    while (nums[i] === nums[i - 1]) i++;

    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      let triplesSum = nums[i] + nums[l] + nums[r];
      if (triplesSum === 0) {
        satisfactoryTriples.push([nums[i], nums[l], nums[r]]);
        while (nums[++l] === nums[l - 1]);
        while (nums[--r] === nums[r + 1]);
      } else if (triplesSum < 0) {
        while (nums[++l] === nums[l - 1]);
      } else {
        while (nums[--r] === nums[r + 1]);
      }
    }
  }

  return satisfactoryTriples;
};

/* https://leetcode.com/problems/3sum/solutions/2039246/typescript-easy-solution-two-pointers-sorting/?source=submission-noac */
// function threeSum(nums: number[]): number[][] {
//   nums.sort((a, b) => a - b);
//   const res: number[][] = [];

//   nums.forEach((value, idx): void => {
//     if (idx > 0 && value === nums[idx - 1]) return;
//     let left = idx + 1,
//       right = nums.length - 1;

//     while (left < right) {
//       let sum = value + nums[left] + nums[right];
//       if (sum > 0) {
//         right--;
//       } else if (sum < 0) {
//         left++;
//       } else {
//         res.push([value, nums[left], nums[right]]);
//         left++;
//         while (left < right && nums[left] === nums[left - 1]) left++;
//       }
//     }
//   });
//   return res;
// };