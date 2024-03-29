function mergeAlternately(word1: string, word2: string): string {
    let aux = ''

    for (let i = 0; i < word1.length || i < word2.length; i++) {
        aux += (word1[i] ? word1[i] : '') + (word2[i] ? word2[i] : '')
    }

    return aux
}