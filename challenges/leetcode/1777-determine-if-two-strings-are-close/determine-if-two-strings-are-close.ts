function closeStrings(word1: string, word2: string): boolean {
    if (word1.length != word2.length) {
        return false
    }

    const m1 = new Map()
    const m2 = new Map()

    for (let i = 0; i < word1.length; i++) {
        m1.set(word1[i], (m1.get(word1[i]) || 0) + 1)
    }

    for (let j = 0; j < word2.length; j++) {
        m2.set(word2[j], (m2.get(word2[j]) || 0) + 1)
    }

    if ([...m1.keys()].sort().join('') != [...m2.keys()].sort().join('')) {
        return false
    }

    if ([...m1.values()].sort().join('') != [...m2.values()].sort().join('')) {
        return false
    }

    return true
};