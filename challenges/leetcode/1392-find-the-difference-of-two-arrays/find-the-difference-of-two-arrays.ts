function findDifference(nums1: number[], nums2: number[]): number[][] {
    let s1 = new Set([])
    let s2 = new Set([])

    nums1.forEach((n1) => {
        if (nums2.indexOf(n1) === -1) {
            s1.add(n1)
        }
    })

    nums2.forEach((n2) => {
        if (nums1.indexOf(n2) === -1) {
            s2.add(n2)
        }
    })

    return [[...s1.keys()], [...s2.keys()]]

    // return [[...s1.difference(s2)], [...s2.difference(s1)]]
    // let m1 = new Map()
    // let m2 = new Map()

    // const check = (v: number, arr2: number[], map) => {
    //     if (arr2.indexOf(v) === -1) {
    //         map.set(v, 1)
    //     }
    // }

    // for (let i = 0; i < Math.max(nums1.length, nums2.length); i++) {
    //     i < nums1.length && check(nums1[i], nums2, m1)
    //     i < nums2.length && check(nums2[i], nums1, m2)
    // }

    // return [[...m1.keys()],[...m2.keys()]]
};