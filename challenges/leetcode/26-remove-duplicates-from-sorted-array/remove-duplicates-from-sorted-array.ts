function removeDuplicates(nums: number[]): number {
    let count = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] == nums[i + 1]) {
            count++;
        } else nums[i + 1 - count] = nums[i + 1];
    }

    return nums.length - count;
};