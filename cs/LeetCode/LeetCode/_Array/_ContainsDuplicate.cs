namespace LeetCode._Array
{
    internal class _ContainsDuplicate
    {
        public bool ContainsDuplicate(int[] nums)
        {
            HashSet<int> set = nums.ToHashSet();
            return !(nums.Length == set.Count);
        }
    }
}
