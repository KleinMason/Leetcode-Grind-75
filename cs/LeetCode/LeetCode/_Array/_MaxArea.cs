namespace LeetCode._Array
{
    internal class _MaxArea
    {
        public int MaxArea(int[] height)
        {
            int maxArea = 0;
            int left = 0;
            int right = height.Length - 1;
            int containerHeight;
            int containerWidth;

            while (left < right)
            {
                containerWidth = Math.Min(height[left], height[right]);
                containerHeight = right - left;
                maxArea = Math.Max(maxArea, containerWidth * containerHeight);
                if (height[left] < height[right])
                    left++;
                else
                    right--;
            }

            return maxArea;
        }
    }
}
