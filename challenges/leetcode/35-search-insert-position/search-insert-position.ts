function searchInsert(nums: number[], target: number): number {
    let ind = -1
    let start = 0
    let mid = Math.floor(nums.length/2)
    let end = nums.length

    if(nums[mid]<target){
        start = mid
    }

    for (let i = start; i < end; i++) {

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