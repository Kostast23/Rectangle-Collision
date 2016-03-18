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

// Positions the rectangle rect to coordinates (x, y).
// If (x, y) is a point outside the canvas area the coordinates are corrected.
function positionRectangle(rect, x, y) {
    if (x >= 0 && x + rect.width <= canvas.width) {
        rect.left = x;
        rect.right = rect.left + rect.width;
    } else if (x < 0) {
        rect.left = 0;
        rect.right= rect.width;
    } else if (x + rect.width > canvas.width) {
        rect.left = canvas.width - rect.width;
        rect.right = canvas.width;
    }
    if (y >= 0 && y + rect.height <= canvas.height) {
        rect.top = y;
        rect.bottom = rect.top + rect.height;
    } else if (y < 0) {
        rect.top = 0;
        rect.bottom = rect.height;
    } else if (y + rect.height > canvas.height) {
        rect.top = canvas.height - rect.height;
        rect.bottom = canvas.height;   
    }
}

// Checks 4 conditions about the collision of rectA and rectB.
function checkCollision() {
    var conds = [false, false, false, false];
    if (rectA.right >= rectB.left)
        conds[0] = true;
    if (rectB.right >= rectA.left)
        conds[1] = true;
    if (rectA.bottom >= rectB.top)
        conds[2] = true;
    if (rectB.bottom >= rectA.top)
        conds[3] = true;
    return conds;
}

