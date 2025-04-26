function removeElement(nums: number[], val: number): number {
  nums.filter(num => num !== val);
  return nums.length;
}
