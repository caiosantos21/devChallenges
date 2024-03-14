/**
 * URL https://leetcode.com/problems/find-the-pivot-integer
 */

function pivotInteger(n: number): number {
  let num = -1;

  for (let i = 1; i <= n; i++) {
    let s1 = (i * (i + 1)) / 2;
    let s2 = ((n - (i - 1)) * (i + n)) / 2;

    if (s1 === s2) {
      num = i;
    }
  }

  return num;
}
