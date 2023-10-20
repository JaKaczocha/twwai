class point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    move(x: number, y: number): any {
        this.x += x;
        this.y += y;
    }
}

class rectangle {
    points: point[];

    constructor(p1: point, p2: point, p3: point, p4: point) {
        let points = [p1, p2, p3, p4];
        points.sort((a, b) => a.x - b.x || a.y - b.y);
        this.points = [points[0], points[1], points[3], points[2]];
    }

    move(x: number, y: number): any {
        for (let i = 0; i < 4; i++) {
            this.points[i].move(x, y);
        }
    }

    getArea(): number {
        let h: number = Math.abs(this.points[0].y - this.points[1].y);
        let a: number = Math.abs(this.points[0].x - this.points[3].x);
        return a * h;
    }
}

export { rectangle };
export { point };