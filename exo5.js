class Point {
    constructor(x, y) {
        this.x = x; 
        this.y = y;
    }
    getX = () => {
        return this.x;
    }
    setX = (x) => {
        this.x = x;
    }
    getY = () => {
        return this.x;
    }
    setY= (y) => {
        this.y = y;
    }

    toString = () => {
        return `Point(${this.x}, ${this.y})`;
    }
}
module.exports = Point;
//Test 
let point = new Point(2, 4);
console.log(point.toString());
point.setX(4);
console.log(point.getX());