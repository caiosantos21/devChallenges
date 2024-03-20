function productExceptSelf(nums: number[]): number[] {
    let ans = []
    let n = nums.length;

    let left = nums[0];
    ans[0] = 1;
    for (let i = 1; i < n; i++) {
        ans[i] = left;
        left *= nums[i];
    }

    let right = nums[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        ans[i] *= right;
        right *= nums[i];
    }


    return ans
};