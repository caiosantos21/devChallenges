function twoSum(nums: number[], target: number): number[] {
    let mp = new Map()

    for (let i = 0; i < nums.length; i++) {
        if (mp.get(target - nums[i]) != undefined) {
            return [mp.get(target - nums[i]), i]
            // arr.push(mp.get(target - nums[i]), i)
        }

        mp.set(nums[i], i)
    }

    return []
};