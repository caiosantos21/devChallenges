function isSubsequence(s: string, t: string): boolean {
    if (s === t) {
        return true
    }

    if (s.length > t.length) {
        return false
    }

    let i = 0

    for (let j = 0; j < t.length; j++) {
        if (s[i] === t[j]) {
            i++
        }

        if (i === s.length) {
            return true
        }
    }
    
    return false
};