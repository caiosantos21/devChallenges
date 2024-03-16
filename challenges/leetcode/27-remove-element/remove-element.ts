function removeElement(nums: number[], val: number): number {
    if (nums.indexOf(val) >= 0) {
        nums.splice(nums.indexOf(val), 1)

        removeElement(nums, val)
    }

    return nums.length
};