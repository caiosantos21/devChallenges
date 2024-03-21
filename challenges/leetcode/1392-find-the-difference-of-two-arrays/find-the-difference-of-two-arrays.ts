function findDifference(nums1: number[], nums2: number[]): number[][] {
    let m1 = new Map()
    let m2 = new Map()


    for (let i = 0; i < nums1.length; i++) {
        if (nums2.indexOf(nums1[i]) === -1) {
            m1.set(nums1[i], 1)
        }
    }

    for (let i = 0; i < nums2.length; i++) {
        if (nums1.indexOf(nums2[i]) === -1) {
            m2.set(nums2[i], 1)
        }
    }

    return [[...m1.keys()], [...m2.keys()]]
};