function myAtoi(s: string): number {
  let i = 0,
    sign = 1,
    base = 0;

  const MAX_SAFE_INT = Math.pow(2, 31) - 1
  const MIN_SAFE_INT = -Math.pow(2, 31)

  while (s[i] == ' ') i++;
  if (s[i] == '-' || s[i] == '+') {
    sign = s[i++] == '-' ? -1 : 1;
  }

  while (s[i] >= '0' && s[i] <= '9') {
    if (base > Math.floor(MAX_SAFE_INT / 10)
      || (base == Math.floor(MAX_SAFE_INT / 10) && +s[i] > 7)) {
      if (sign == 1)
        return MAX_SAFE_INT;
      else
        return MIN_SAFE_INT;
    }

    base = 10 * base + (+s[i++]);
  }

  return base * sign;
};
