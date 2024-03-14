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

        if(list[next] && roman[list[next]] > roman[list[i]]){
            aux = roman[list[next]] - roman[list[i]]
            i++
        }


        total = total + aux
    }

    return total
};