namespace LeetCode.Array
{
    internal class _InsertInterval
    {
        public int[][] Insert(int[][] intervals, int[] newInterval)
        {
            var result = new List<int[]>();

            foreach (var interval in intervals)
            {
                if (interval[0] > newInterval[1])
                {
                    result.Add(newInterval);
                    newInterval = interval;
                }
                else if (interval[1] < newInterval[0])
                {
                    result.Add(interval);
                }
                else
                {
                    newInterval[0] = Math.Min(interval[0], newInterval[0]);
                    newInterval[1] = Math.Max(interval[1], newInterval[1]);
                }
            }

            result.Add(newInterval);
            return result.ToArray();
        }
    }
}
