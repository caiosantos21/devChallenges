function equalPairs(grid: number[][]): number {
    let m1 = new Map()
    let m2 = new Map()

    for (let i = 0; i < grid.length; i++) {
        let row = ''
        let col = ''

        for (let j = 0; j < grid.length; j++) {
            row += (j > 0 ? '.' : '') + grid[i][j]
            col += (j > 0 ? '.' : '') + grid[j][i]
        }

        m1.set(row, (m1.get(row) || 0) + 1)
        m2.set(col, (m2.get(col) || 0) + 1)
    }

    let total = 0

    m1.forEach((v, k) => {
        if (m2.has(k)) {
            total += v * m2.get(k)
        }
    })

    return total
};