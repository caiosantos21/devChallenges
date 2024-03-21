function findDifference(nums1: number[], nums2: number[]): number[][] {
    let m1 = new Map().set(0, []).set(1, [])

    const check = (v: number, arr2: number[], key: number) => {
        if (arr2.indexOf(v) === -1 && m1.get(key).indexOf(v) === -1) {
            m1.get(key).push(v)
        }
    }

    for (let i = 0; i < nums1.length; i++) {
        check(nums1[i], nums2, 0)
    }

    for (let i = 0; i < nums2.length; i++) {
        check(nums2[i], nums1, 1)
    }
    let arr = []
    m1.forEach((v,k)=>{
        arr[k] = v
    })

    return arr
};