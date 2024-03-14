function romanToInt(s: string): number {
    const roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    const list = s.split('')
    let total = 0

    for (let i = 0; i < list.length; i++) {
        const next = i + 1
        let aux = roman[list[i]]

        if (list[i] === 'I') {
            if (list[next] === 'V') {
                aux = 4
                i++
            } else if (list[next] === 'X') {
                aux = 9
                i++
            }
        } else if (list[i] === 'X') {
            if (list[next] === 'L') {
                aux = 40
                i++
            } else if (list[next] === 'C') {
                aux = 90
                i++
            }
        } else if (list[i] === 'C') {
            if (list[next] === 'D') {
                aux = 400
                i++
            } else if (list[next] === 'M') {
                aux = 900
                i++
            }
        }

        total = total + aux
    }

    return total
};