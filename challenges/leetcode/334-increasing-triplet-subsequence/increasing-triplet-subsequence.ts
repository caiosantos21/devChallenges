function increasingTriplet(nums: number[]): boolean {
    let a = Math.pow(2, 31) - 1
    let b = a

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= a) {
            a = nums[i]
        } else if (nums[i] <= b) {
            b = nums[i]
        } else {
            return true
        }
    }

    return false
}