function lengthOfLongestSubstring(s: string): number {

    let size = 0
    let l = 0
    let r = 0
    const list = new Map()

    while (r < s.length) {
        //Se tiver, atualiza a posicao para o prox item da lista
        if (list.has(s[r])) {
            l = Math.max(list.get(s[r]) + 1, l)
        }

        list.set(s[r], r)
        size = Math.max(size, r - l + 1)
        r++
    }

    return size
}