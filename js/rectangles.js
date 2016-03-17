'use strict';

class Rectangle {
    constructor(left, top, width, height) {
        this.width = width;
        this.height = height;
        this.left = left;
        this.top = top;
        this.right = this.left + this.width;
        this.bottom = this.top + this.height;
    }

    isPointInRectangle(x, y) {
        return this.left <= x && this.right >= x && this.top <= y && this.bottom >= y;
    }
}

var rectA = new Rectangle(180, 120, 120, 90);
var rectB = new Rectangle(330, 220, 140, 100);
