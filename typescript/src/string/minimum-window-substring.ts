function minWindow(s: string, t: string): string {
  let need: Map<string, number> = new Map();
  let have: Map<string, number> = new Map();
  let minSubstring: string = "";
  let count: number;
  let right = 0, left = 0;

  Array.from(t).forEach(char => {
    need.set(char, (need.get(char) || 0) + 1);
  });
  Array.from(need.keys()).forEach(key => have.set(key, 0));
  count = need.size;

  for (; right < s.length; right++) {
    let char = s[right];
    if (!need.has(char)) continue; // if we don't need the current character

    have.set(char, have.get(char) + 1);
    if (have.get(char) == need.get(char)) count--;
    if (count != 0) continue; // if window does not yet contain all the needed characters

    while (count == 0) { // Shrink left side of window
      let charToRemove = s[left];
      left++;
      if (!have.has(charToRemove)) continue;
      if (have.get(charToRemove) == need.get(charToRemove))
        count++;
      have.set(charToRemove, have.get(charToRemove) - 1);
    }

    let currentSubstring = s.slice(left - 1, right + 1)
    if (!minSubstring || minSubstring.length > currentSubstring.length)
      minSubstring = currentSubstring
  }

  return minSubstring;
};