/**
 Do not return anything, modify nums in-place instead.
 */
// function sortColors(nums: number[]): void {
//   let buckets: number[] = new Array(3).fill(0);

//   nums.forEach(n => {
//     buckets[n]++;
//   });

//   let activeBucket = 0;

//   for (let i = 0; i < nums.length; i++) {
//     while (buckets[activeBucket] == 0) activeBucket++;
//     nums[i] = activeBucket;
//     buckets[activeBucket]--;
//   }

// };

/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  let [l, i, r] = [0, 0, nums.length - 1];

  function swap(x: number, y: number) {
    let tmp = nums[x];
    nums[x] = nums[y];
    nums[y] = tmp;
  }

  while (i <= r) {
    if (nums[i] == 0) {
      swap(l, i)
      i++;
      l++;
    } else if (nums[i] == 2) {
      swap(i, r)
      r--;
    } else {
      i++;
    }
  }
};

export { sortColors };