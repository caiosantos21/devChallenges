function uniqueOccurrences(arr: number[]): boolean {
    const mp = new Map()

    for (let i = 0; i < arr.length; i++) {
        mp.set(arr[i], (mp.get(arr[i]) || 0) + 1)
    }

    const a = new Set([...mp.values()])


    return a.size === mp.size
};