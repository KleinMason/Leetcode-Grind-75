namespace LeetCode.Array
{
    internal class _SortColors
    {
        public void SortColors(int[] nums)
        {
            int current = 0,
                left = 0,
                rigth = nums.Length - 1;

            while (current <= rigth)
            {
                if (nums[current] == 2)
                {
                    _Swap(nums, current, rigth);
                    rigth--;
                }
                else if (nums[current] == 0)
                {
                    _Swap(nums, current, left);
                    current++; left++;
                }
                else
                {
                    current++;
                }
            }
        }

        private void _Swap(int[] nums, int index1, int index2)
        {
            int swap = nums[index1];
            nums[index1] = nums[index2];
            nums[index2] = swap;
        }
    }
}
