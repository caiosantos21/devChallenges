function lengthOfLastWord(s: string): number {
    // const a = s.trim()

    // return a.length - a.lastIndexOf(' ') - 1

    let a = 0
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === ' ') {
            if (a > 0) {
                return a
            }
        } else {
            a++
        }
    }

    return a
}