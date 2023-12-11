function majorityElement(nums: number[]): number {
  let candidate;
  let count = 0;

  nums.forEach(num => {
    if (count === 0)
      candidate = num;
    count = candidate == num ? count + 1 : count - 1;
  });

  return candidate;
};