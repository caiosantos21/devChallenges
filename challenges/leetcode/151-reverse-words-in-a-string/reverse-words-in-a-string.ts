function reverseWords(s: string): string {
    let a = ''
    let b = ''

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== ' ') {
            a = s[i] + a

        }

        if (s[i] === ' ' || i === 0) {
            b = b + ((a.length > 0 && b.length > 0) ? ' ' : '') + a
            a = ''
        }
    }


    return b
};