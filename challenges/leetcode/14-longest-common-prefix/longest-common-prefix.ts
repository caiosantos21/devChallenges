function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) {
        return ''
    }
    
    const b = strs[0]

    for (let i = 0; i < b.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (i === b.length) {
                return b
            }

            if (b[i] != strs[j][i]) {
                return b.slice(0, i)
            }
        }
    }

    return b
};