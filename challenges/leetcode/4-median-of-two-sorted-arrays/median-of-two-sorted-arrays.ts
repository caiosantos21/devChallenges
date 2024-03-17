function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    var m = nums1.length;
    var n = nums2.length;

    const getMedian = (arr: number[]) => {
        if (arr.length === 1) {
            return arr[0]
        }
        const half = ~~(arr.length / 2)
        console.log(arr, half)
        if (arr.length % 2 === 0) {
            return (arr[half] + arr[half - 1]) / 2
        }
        if (arr.length % 2 === 1) {
            return arr[half]
        }
    }

    if (m === 0 && n === 0) {
        return 0
    }


    if (m > 0 && n === 0) {
        return getMedian(nums1)
    }

    if (m === 0 && n > 0) {
        return getMedian(nums2)
    }


    let i = 0;
    let j = 0;
    let arr = []

    while (i <= m && j <= n) {
        if (nums1[i] && nums2[j]===undefined) {
            arr.push(nums1[i])
            i++
        }
        else if (nums1[i]===undefined && nums2[j]) {
            arr.push(nums2[j])
            j++
        } else if (nums1[i] < nums2[j]) {
            arr.push(nums1[i])
            i++
        } else if (nums1[i] >= nums2[j]) {
            arr.push(nums2[j])
            j++
        } else {
            i++
            j++
        }
    }

    return getMedian(arr)
}