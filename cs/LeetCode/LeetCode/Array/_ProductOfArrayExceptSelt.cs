namespace LeetCode.Array
{
    internal class _ProductOfArrayExceptSelt
    {
        public int[] ProductExceptSelf(int[] nums)
        {
            int[] results = new int[nums.Length];
            int multiplier = 1;

            for (int i = 0; i < nums.Length; i++)
            {
                results[i] = multiplier;
                multiplier *= nums[i];
            }

            multiplier = 1;

            for (int i = nums.Length - 1; i >= 0; i--)
            {
                results[i] *= multiplier;
                multiplier *= nums[i];
            }

            return results;
        }
    }
}
