function findDifference(nums1: number[], nums2: number[]): number[][] {
    let m1 = new Map().set(0, []).set(1, [])

    const check = (i: number, arr1: number[], arr2: number[], key: number) => {
        if (i < arr1.length && arr2.indexOf(arr1[i]) === -1 && m1.get(key).indexOf(arr1[i]) === -1) {
            m1.set(key, [...m1.get(key), arr1[i]])
        }
    }

    for (let i = 0; i < Math.max(nums1.length, nums2.length); i++) {
        check(i, nums1, nums2, 0)
        check(i, nums2, nums1, 1)
    }

    return [...m1.values()]
};