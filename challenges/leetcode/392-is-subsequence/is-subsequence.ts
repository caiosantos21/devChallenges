function isSubsequence(s: string, t: string): boolean {
    if (s === t) {
        return true
    }

    if (s.length > t.length) {
        return false
    }

    let i = 0
    let j = 0

    while (j < t.length) {
        if (s[i] === t[j]) {
            i++
        }

        j++

        if (i === s.length) {
            return true
        }
    }

    

    return false
};