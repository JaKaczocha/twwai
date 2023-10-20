"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.point = exports.rectangle = void 0;
var point = /** @class */ (function () {
    function point(x, y) {
        this.x = x;
        this.y = y;
    }
    point.prototype.move = function (x, y) {
        this.x += x;
        this.y += y;
    };
    return point;
}());
exports.point = point;
var rectangle = /** @class */ (function () {
    function rectangle(p1, p2, p3, p4) {
        var points = [p1, p2, p3, p4];
        points.sort(function (a, b) { return a.x - b.x || a.y - b.y; });
        this.points = [points[0], points[1], points[3], points[2]];
    }
    rectangle.prototype.move = function (x, y) {
        for (var i = 0; i < 4; i++) {
            this.points[i].move(x, y);
        }
    };
    rectangle.prototype.getArea = function () {
        var h = Math.abs(this.points[0].y - this.points[1].y);
        var a = Math.abs(this.points[0].x - this.points[3].x);
        return a * h;
    };
    return rectangle;
}());
exports.rectangle = rectangle;
