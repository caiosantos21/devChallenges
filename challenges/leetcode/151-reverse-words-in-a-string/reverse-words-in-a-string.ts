function reverseWords(s: string): string {
    s.trim()
    let aux = s.split(' ')
    let r = []

    for (let i = aux.length - 1; i >= 0; i--) {
        if (aux[i] != '') {
            r.push(aux[i])
        }
    }

    return r.join(' ').trim()
};