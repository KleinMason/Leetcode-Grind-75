// function lengthOfLongestSubstring(s: string): number {
//   let maxLength: number = 0;

//   let set: Set<string> = new Set();

//   for (let i = 0, j = 0; i < s.length; i++) {
//     while (set.has(s[i]))
//       set.delete(s[j++]);
//     set.add(s[i]);
//     maxLength = Math.max(maxLength, set.size);
//   }

//   return maxLength;
// };

function lengthOfLongestSubstring(s: string): number {
  let maxLength: number = 0;
  let charMap: Map<string, number> = new Map();

  for (let right = 0, left = 0; right < s.length; right++) {
    let char = s[right];
    if (charMap.has(char) && charMap.get(char) >= left)
      left = charMap.get(char) + 1
    charMap.set(char, right);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};