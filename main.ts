import { Circle } from "./circle";

let circleList: Circle[] = [];

let circle1 = new Circle('Xanh', 15);
let circle2 = new Circle('Do', 10);
let circle3 = new Circle('Tim', 12);
let circle4 = new Circle('Vang', 18);

circleList.push(circle1);
circleList.push(circle2);
circleList.push(circle3);
circleList.push(circle4);

function showCircle(circle: Circle){
    console.log(`Hinh tron mau: ${circle._color} | Ban kinh: ${circle._radius}`)
}

circleList.forEach(showCircle);