/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {

  return function (n: number): number {
    let low: number = 1,
      high: number = n,
      middle: number;

    while (low < high) {
      middle = Math.floor((low + high) / 2);
      if (isBadVersion(middle))
        high = middle;
      else
        low = middle + 1;
    }

    return high;
  };
};