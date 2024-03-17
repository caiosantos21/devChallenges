function plusOne(digits: number[]): number[] {
    if (digits.length === 0) {
        return []
    }


    let aux = 0
    for (let i = digits.length - 1; i >= 0; i--) {
        let sum = digits[i] + aux + ((i === digits.length - 1) ? 1 : 0)
        aux = ~~(sum / 10)
        digits[i] = sum % 10

    }
    
    if (aux > 0) {
        digits.unshift(aux)
    }

    return digits
};