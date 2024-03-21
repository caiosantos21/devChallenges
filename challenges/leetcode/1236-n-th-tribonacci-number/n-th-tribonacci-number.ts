let mp = new Map()

function tribonacci(n: number): number {
    let val = 0

    if (n === 0) {
        return val
    }

    for (let i = 1; i < n + 1; i++) {
        if (i <= 2) {
            val = 1
        } else {
            val = mp.get(i - 1) + mp.get(i - 2) + (mp.get(i - 3) || 0)
        }

        mp.set(i, val)
    }

    return mp.get(n)
};

