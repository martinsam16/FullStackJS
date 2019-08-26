class Grid {
    static origin = { x: 0, y: 0 };
    calcDist(point: { x: number; y: number }) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist);
    }

    constructor(public scale: number) { }
}

let grid1 = new Grid(1.2);
console.log(grid1.calcDist({ x: 2, y: 77 }));
console.log(grid1.calcDist({ x: 2, y: 77 }));