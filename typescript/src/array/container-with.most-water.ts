function maxArea(height: number[]): number {
  let maxArea = 0;
  let [l, r] = [0, height.length - 1];

  while (l < r) {
    maxArea = Math.max(
      maxArea,
      Math.min(height[l], height[r]) * (r - l)
    );
    if (height[l] < height[r]) l++
    else r--;
  }

  return maxArea;
};