import { point, rectangle } from './rectangle';

const p1 = new point(0, 0);
const p2 = new point(0, 4);
const p3 = new point(6, 0);
const p4 = new point(6, 4);

const rect = new rectangle(p1, p2, p3, p4);

console.log('Initial rectangle:');
console.log(rect);

rect.move(2, 3);

console.log('Rectangle after moving:');
console.log(rect);

const area = rect.getArea();
console.log('Area of the rectangle:', area);







