let mp = new Map()

function tribonacci(n: number): number {
    if (n === 0) {
        return 0
    }

    for (let i = 1; i < n + 1; i++) {
        if (i <= 2) {
             mp.set(i, 1)
        } else {
            mp.set(i,( mp.get(i - 1) + mp.get(i - 2) + (mp.get(i - 3) || 0)))
        }
    }

    return mp.get(n)
};

