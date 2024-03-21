function findDifference(nums1: number[], nums2: number[]): number[][] {
    let s1 = new Set(nums1)
    let s2 = new Set(nums2)
    let arr = [[], []]

    const a = [...s1.values()]
    const b = [...s2.values()]

    for (let i = 0; i < Math.max(s1.size, s2.size); i++) {
        if (i < s1.size && !s2.has(a[i])) {
            arr[0].push(a[i])
        }
        if (i < s2.size && !s1.has(b[i])) {
            arr[1].push(b[i])
        }
    }

    return arr

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