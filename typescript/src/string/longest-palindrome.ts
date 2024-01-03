// function longestPalindrome(s: string): number {
//   let count: number = 0;

//   let charMap: Map<string, number> = new Map();
//   Array.from(s).forEach(c => {
//     charMap.set(c, (charMap.get(c) || 0) + 1);
//   })

//   let seenOdd: boolean = false;

//   Array.from(charMap.values()).forEach(v => {
//     if (v % 2 === 0 ) {
//       count += v;
//       return;
//     }
//     seenOdd = true;
//     if (v > 1) {
//       count += v - 1;
//       return;
//     }
//   });

//   return seenOdd ? count + 1 : count;
// };

function longestPalindrome(s: string): number {
  let charSet: Set<string> = new Set();
  let count: number = 0;

  Array.from(s).forEach(char => {
    if (charSet.delete(char)) {
      count += 2;
    } else {
      charSet.add(char);
    }
  });

  return !!charSet.size ? count + 1 : count;
}