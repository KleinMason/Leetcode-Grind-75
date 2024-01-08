function search(nums: number[], target: number): number {
  let left = 0, right = nums.length - 1;
  let middle;

  while (left <= right) {
    middle = Math.floor(right + left / 2);

    if (nums[middle] === target)
      return middle;

    if (nums[middle] < target)
      left = middle + 1;
    else
      right = middle - 1;
  }

  return -1;
};