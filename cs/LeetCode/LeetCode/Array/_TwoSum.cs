namespace LeetCode.Array
{
    internal class _TwoSum
    {
        public int[] TwoSum(int[] nums, int target)
        {
            Dictionary<int, int> seen = new Dictionary<int, int>();
            for (int i = 0; i < nums.Length; i++)
            {
                if (seen.ContainsKey(target - nums[i]))
                {
                    return new int[] { seen.GetValueOrDefault(target - nums[i]), i };
                }
                seen.TryAdd(nums[i], i);
            }
            return new int[] { -1, -1 };
        }
    }
}
