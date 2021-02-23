const  Point  = require('./exo5.js');


class Circle {
    constructor(point, radius) {
        this.point = new Point(point.x, point.y); 
        this.radius = radius;
    }

    area = () => {
        return (2*Math.PI*Math.pow(this.radius, 2));
    }

    containsPoint = (point) => {
        if((Math.pow((point.x - this.point.x), 2) + Math.pow((point.y - this.point.y), 2)) == 0) return true;
        return false;
    }

    toString = () => {
        return `Circle(${this.point.x}, ${this.point.y}, ${this.radius})`;
    }
}

//TEST
let c = new Circle({x: 2, y: 2}, 3);
console.log(c.toString());
console.log(`Area : ${c.area()}`);
let pt = new Point(5, 3);
console.log(c.containsPoint(pt));
