function searchInsert(nums: number[], target: number): number {
    let ind = -1

    for (let i = 0; i < nums.length; i++) {
    
        if (nums[i] >= target) {
            ind = i
            break
        }

        if (nums[i] < target && (target < nums[i + 1] || i + 1 === nums.length)) {
            ind = i + 1
            break
        }

    }

    return ind
};