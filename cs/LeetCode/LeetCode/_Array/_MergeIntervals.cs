

namespace LeetCode._Array
{
    internal class _MergeIntervals
    {
        public int[][] Merge(int[][] intervals)
        {
            if (intervals.Length < 2)
                return intervals;
            Array.Sort(intervals, (a, b) => a[0] - b[0]);
            List<int[]> result = new List<int[]>();
            int[] workingInterval = intervals[0];

            for (int i = 1; i < intervals.Length; i++)
            {
                if (workingInterval[1] >= intervals[i][0])
                {
                    workingInterval[0] = Math.Min(workingInterval[0], intervals[i][0]);
                    workingInterval[1] = Math.Max(workingInterval[1], intervals[i][1]);
                }
                else
                {
                    result.Add(workingInterval);
                    workingInterval = intervals[i];
                }
            }
            result.Add(workingInterval);
            return result.ToArray();
        }
    }
}
