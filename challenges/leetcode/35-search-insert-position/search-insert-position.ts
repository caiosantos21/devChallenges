function searchInsert(nums: number[], target: number): number {
    if (nums[nums.length - 1] < target) {
        return nums.length
    }

    if (nums[0] >= target) {
        return 0
    }


    for (let i = 1; i <= nums.length - 1; i++) {
        if (nums[i] >= target) {
            return i
        }
    }


};