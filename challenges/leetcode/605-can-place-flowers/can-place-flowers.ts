function canPlaceFlowers(flowerbed: number[], n: number): boolean {

    let beds = 0

    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0) {
            if (flowerbed[i - 1] != 1 && flowerbed[i + 1] != 1) {
                beds++
                flowerbed[i] = 1
            }
        } else if (flowerbed[i] === 0) {
            i++
        }
    }

    return beds >= n
};