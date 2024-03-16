function searchInsert(nums: number[], target: number): number {
    // if (nums[nums.length - 1] < target) {
    //     return nums.length
    // }

    // if (nums[0] >= target) {
    //     return 0
    // }

    // for (let i = 1; i <= nums.length - 1; i++) {
    //     if (nums[i] >= target) {
    //         return i
    //     }
    // }

    let low = 0;
    let high = nums.length - 1;

    while (high >= low) {
        let mid = ~~(low + (high - low) / 2);

        if (target == nums[mid]) {
            return mid;
        }
        else if (target > nums[mid]) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }


    return low;
};