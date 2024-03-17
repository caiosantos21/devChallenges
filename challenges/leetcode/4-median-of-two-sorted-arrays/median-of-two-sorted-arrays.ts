function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const getMedian = (arr: number[]) => {
        const half = ~~(arr.length / 2)
 
        if (arr.length % 2 === 0) {
            return (arr[half] + arr[half - 1]) / 2
        }
        if (arr.length % 2 === 1) {
            return arr[half]
        }
    }

    if (nums1.length === 0 && nums2.length === 0) {
        return 0
    }


    if (nums1.length > 0 && nums2.length === 0) {
        return getMedian(nums1)
    }

    if (nums1.length === 0 && nums2.length > 0) {
        return getMedian(nums2)
    }


    let i = 0;
    let j = 0;
    let arr = []

    while (i <= nums1.length && j <= nums2.length) {
        if (nums1[i] && nums2[j]===undefined) {
            arr[arr.length] = nums1[i]
            // arr.push(nums1[i])
            i++
        }
        else if (nums1[i]===undefined && nums2[j]) {
            arr[arr.length] = nums2[j]
            // arr.push(nums2[j])
            j++
        } else if (nums1[i] < nums2[j]) {
            arr[arr.length] = nums1[i]
            // arr.push(nums1[i])
            i++
        } else if (nums1[i] >= nums2[j]) {
            arr[arr.length] = nums2[j]
            // arr.push(nums2[j])
            j++
        } else {
            i++
            j++
        }
    }

    return getMedian(arr)
}