function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let max = candies[0]

    for (let i = 1; i < candies.length; i++) {
        max = Math.max(max, candies[i])
    }

    let aux = []
    for (let i = 0; i < candies.length; i++) {
        aux[i] = (candies[i] + extraCandies) >= max
    }

    return aux
};