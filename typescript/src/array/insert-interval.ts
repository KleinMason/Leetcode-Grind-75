function insert(intervals: number[][], newInterval: number[]): number[][] {
  let result: number[][] = [];

  for (let i = 0; i < intervals.length; i++) {
    if (newInterval[1] < intervals[i][0]) {
      result.push(newInterval);
      intervals.slice(i).forEach(interval => result.push(interval));
      return result;
    } else if (newInterval[0] > intervals[i][1]) {
      result.push(intervals[i]);
    } else {
      newInterval = [
        Math.min(newInterval[0], intervals[i][0]),
        Math.max(newInterval[1], intervals[i][1])
      ];
    }
  }

  result.push(newInterval);

  return result;
};