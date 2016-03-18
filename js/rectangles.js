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
var active = null;
var lastActive = null;
var activatedX = null;  // distance from rectangles left edge to activation's x coordinate.
var activatedY = null;  // distance from rectangles top edge to activation's y coordinate.

// If there is a rectangle at coordinates (x, y) sets active var to point to it.
function activateRectangle(x, y) {
    active = null;

    if (rectA.isPointInRectangle(x, y) && rectB.isPointInRectangle(x, y)) {
        if (lastActive != rectB) {
            active = rectA;
        } else {
            active = rectB;
        }
    } else if (rectA.isPointInRectangle(x, y)) {
        active = rectA;
    } else if (rectB.isPointInRectangle(x, y)) {
        active = rectB;
    }

    if (active != null) {
        activatedX = x - active.left;
        activatedY = y - active.top;
    }
}

function deactivateRectangle() {
    lastActive = active;
    active = null;
    activatedX = null;
    activatedY = null;
}

// If there is an active rectangle tries to move it to position (x, y).
// The new coordinates are relative to the activation coordinates and not to
// the rectangle's coordinates.
function moveActiveRectangle(x, y) {
    if (active == null)
        return;

    x = x - activatedX;  // from the new coordinates subtract the original
    y = y - activatedY;  // activation difference.
    positionRectangle(active, x, y);
}

