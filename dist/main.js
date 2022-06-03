"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const circle_1 = require("./circle");
let circleList = [];
let circle1 = new circle_1.Circle('Xanh', 15);
let circle2 = new circle_1.Circle('Do', 10);
let circle3 = new circle_1.Circle('Tim', 12);
let circle4 = new circle_1.Circle('Vang', 18);
circleList.push(circle1);
circleList.push(circle2);
circleList.push(circle3);
circleList.push(circle4);
function showCircle(circle) {
    console.log(`Hinh tron mau: ${circle._color} | Ban kinh: ${circle._radius}`);
}
circleList.forEach(showCircle);
