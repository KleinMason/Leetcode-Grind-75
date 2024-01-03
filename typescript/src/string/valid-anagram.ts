function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  let frequency: Map<string, number> = new Map();

  for (let i: number = 0; i < s.length; i++) {
    frequency.set(s[i], (frequency.get(s[i]) || 0) + 1);
    frequency.set(t[i], (frequency.get(t[i]) || 0) - 1);
  }

  return Array.from(frequency.values()).every((element) => element == 0);
};
