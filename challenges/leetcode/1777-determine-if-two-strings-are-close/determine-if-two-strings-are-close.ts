function closeStrings(word1: string, word2: string): boolean {
    if (word1.length != word2.length) {
        return false
    }

    const m1 = new Map()
    const m2 = new Map()

    for (let i = 0; i < Math.max(word1.length,word2.length); i++) {
        i < word1.length && m1.set(word1[i], (m1.get(word1[i]) || 0) + 1)

        i < word2.length && m2.set(word2[i], (m2.get(word2[i]) || 0) + 1)
    }

    if ([...m1.keys()].sort().join('') != [...m2.keys()].sort().join('')) {
        return false
    }

    if ([...m1.values()].sort().join('') != [...m2.values()].sort().join('')) {
        return false
    }

    return true
};