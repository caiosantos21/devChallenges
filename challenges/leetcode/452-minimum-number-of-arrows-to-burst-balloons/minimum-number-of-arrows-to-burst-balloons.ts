function findMinArrowShots(points: number[][]): number {
    points.sort((a, b) => a[0] - b[0])
    let total = 1
    let prev = points[0]

    for (let i = 1; i < points.length; i++) {
        let [currStartPoint, currEndPoint] = points[i];
        let [prevStartPoint, prevEndPoint] = prev;

        if (currStartPoint > prevEndPoint) { // no overlap
            total++;
            prev = points[i];
        } else {
            // overlap
            prev[0] = Math.max(prevStartPoint, currStartPoint);
            prev[1] = Math.min(prevEndPoint, currEndPoint);
        }
    }



    return total
};