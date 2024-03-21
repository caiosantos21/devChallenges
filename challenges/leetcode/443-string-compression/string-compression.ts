function compress(chars: string[]): number {
    const arr = []
    let aux = 1

    for (let i = 0; i <= chars.length; i++) {
        if (chars[i] === chars[i + 1]) {
            aux++
        } else {
            arr.push(chars[i])
            if (aux > 1) {
                arr.push(...aux.toString().split(''))
            }
            aux = 1
        }
    }
    chars.length = 0

    arr.forEach((val) => {
        chars.push(val)
    })

    return chars.length
};