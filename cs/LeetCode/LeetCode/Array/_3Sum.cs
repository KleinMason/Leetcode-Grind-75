namespace LeetCode.Array
{
    internal class _3Sum
    {
        public IList<IList<int>> ThreeSum(int[] nums)
        {
            var result = new List<IList<int>>();
            System.Array.Sort(nums);

            int start = 0,
                left,
                right;

            while (start < nums.Length - 2)
            {
                if (nums[start] > 0) break;
                left = start + 1;
                right = nums.Length - 1;
                while (left < right)
                {
                    int sum = nums[start] + nums[left] + nums[right];
                    if (sum < 0)
                        left++;
                    else if (sum > 0)
                        right--;
                    else
                    {
                        result.Add(new List<int> { nums[start], nums[left], nums[right] });
                        while (left < right && nums[++left] == nums[left - 1]) ;
                        while (left < right && nums[--right] == nums[right + 1]) ;
                    }
                }
                while (start++ < nums.Length - 2 && nums[start] == nums[start - 1]) ;
            }

            return result;
        }
    }
}
