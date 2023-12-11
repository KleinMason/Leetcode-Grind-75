function merge(intervals: number[][]): number[][] {
  if (intervals.length < 2) return intervals;
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  let result: number[][] = [];
  let workingInterval = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    if (workingInterval[1] >= intervals[i][0]) {
      workingInterval = [
        workingInterval[0],
        Math.max(workingInterval[1], intervals[i][1])
      ];
    } else {
      result.push(workingInterval);
      workingInterval = intervals[i];
    }
  }
  result.push(workingInterval);
  return result;
};