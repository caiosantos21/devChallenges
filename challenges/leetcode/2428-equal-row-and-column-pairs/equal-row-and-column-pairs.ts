function equalPairs(grid: number[][]): number {
    let m1 = new Map()
    let m2 = new Map()
    let gridLength = grid.length
    let rowLength = grid[0].length

    for (let i = 0; i < gridLength; i++) {
        let row = ''

        for (let j = 0; j < rowLength; j++) {
            row += (j > 0 ? '.' : '') + grid[i][j]
        }

        m1.set(row, (m1.get(row) || 0) + 1)
    }

    for (let i = 0; i < rowLength; i++) {
        let col = ''

        for (let j = 0; j < gridLength; j++) {
            col += (j > 0 ? '.' : '') + grid[j][i]
        }
        
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