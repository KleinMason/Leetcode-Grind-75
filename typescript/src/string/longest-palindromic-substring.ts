function longestPalindromeSub(s: string): string {
  let startIndex = 0,
    maxLen = 0;

  let extendPalindrome = (l: number, r: number) => {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--; r++;
    }
    if (maxLen < r - l - 1) {
      startIndex = l + 1;
      maxLen = r - l - 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    // check odd length palindromes
    extendPalindrome(i, i);
    // check even length palindromes
    extendPalindrome(i, i + 1);
  }

  return s.slice(startIndex, startIndex + maxLen);
};
