function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let max = Math.max(...candies)

    let aux = []
    for (let i = 0; i < candies.length; i++) {
        aux[i] = (candies[i] + extraCandies) >= max
    }

    return aux
};