function addBinary(a: string, b: string): string {
    if (!a && !b) {
        return ''
    }

    if (b.length > a.length) {
        a = b + (b = a, "")
    }


    let aux = 0
    let st = ''

    while (b.length < a.length) { b = "0" + b }

    for (let i = a.length - 1; i >= 0; i--) {
        if (a[i] === '1' && b[i] === '1') {
            if (aux === 0) {
                st = '0' + st
            } else {
                st = '1' + st
            }
            aux = 1
        } else if (a[i] === '0' && b[i] === '0') {
            if (aux === 0) {
                st = '0' + st
            } else {
                st = '1' + st
                aux = 0
            }
        } else if ((a[i] === '1' && b[i] === '0') || (a[i] === '0' && b[i] === '1')) {
            if (aux === 0) {
                st = '1' + st
            } else {
                st = '0' + st
            }
        }

    }


    if (aux == 1) {
        st = '1' + st
    }
    return st
};