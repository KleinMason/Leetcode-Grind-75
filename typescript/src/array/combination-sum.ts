function combinationSum(candidates: number[], target: number): number[][] {
  let result: number[][] = [];

  function dfs(i: number, current: number[], total: number) {
    if (total == target) {
      result.push([...current]);
      return;
    }
    if (i >= candidates.length || total > target)
      return;

    current.push(candidates[i]);
    dfs(i, current, total + candidates[i]);
    current.pop();
    dfs(i + 1, current, total);
  }

  candidates.sort((a, b) => a - b);
  dfs(0, [], 0);
  return result;
};

