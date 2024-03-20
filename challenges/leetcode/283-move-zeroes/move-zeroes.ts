/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    if (nums.indexOf(0) === -1) {
        return
    }

    let i = 0
    let j = 0

    while (i < nums.length && j < nums.length) {
        if (nums[j] != 0) {
            let a = nums[i]
            nums[i] = nums[j]
            nums[j] = a
            i++
            j++
        } else {
            j++;
        }
    }

};