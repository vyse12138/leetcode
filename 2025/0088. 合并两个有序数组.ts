/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  while (m > 0 || n > 0) {
    const num1 = nums1[m - 1];
    const num2 = nums2[n - 1];

    if (num1 === undefined) {
      nums1[m + n - 1] = num2;
      n -= 1;
      continue;
    }

    if (num2 === undefined) {
      nums1[m + n - 1] = num1;
      m -= 1;
      continue;
    }

    if (num1 > num2) {
      nums1[m + n - 1] = num1;
      m -= 1;
      continue;
    }
    if (num1 < num2) {
      nums1[m + n - 1] = num2;
      n -= 1;
      continue;
    }
    if (num1 === num2) {
      nums1[m + n - 1] = num1;
      nums1[m + n - 2] = num2;
      m -= 1;
      n -= 1;
      continue;
    }
  }
}
