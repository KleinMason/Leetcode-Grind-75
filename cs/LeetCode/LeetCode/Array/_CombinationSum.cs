namespace LeetCode.Array
{
    internal class _CombinationSum
    {
        public IList<IList<int>> CombinationSum(int[] candidates, int target)
        {
            var combinations = new List<IList<int>>();
            _Dfs(candidates, target, new List<int>(), 0, combinations);
            return combinations;
        }

        private void _Dfs(int[] candidates, int target, IList<int> current, int index, IList<IList<int>> combinations)
        {
            if (target == 0)
            {
                combinations.Add(new List<int>(current));
                return;
            }
            if (target < 0 || index == candidates.Length)
                return;

            current.Add(candidates[index]);
            _Dfs(candidates, target - candidates[index], current, index, combinations);
            current.RemoveAt(current.Count - 1);
            _Dfs(candidates, target, current, index + 1, combinations);
        }
    }
}
