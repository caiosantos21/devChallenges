function findDifference(nums1: number[], nums2: number[]): number[][] {
    let m1 = new Map()
    let m2 = new Map()

    for (let i = 0; i < Math.max(nums1.length, nums2.length); i++) {
        if (i < nums1.length && nums2.indexOf(nums1[i]) === -1) {
            m1.set(nums1[i], 1)
        }

        if (i < nums2.length && nums1.indexOf(nums2[i]) === -1) {
            m2.set(nums2[i], 1)
        }
    }

    return [[...m1.keys()], [...m2.keys()]]
};