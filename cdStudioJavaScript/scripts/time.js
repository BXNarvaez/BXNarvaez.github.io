// Create and append canvas to document
var _canvas = document.querySelector('#canvas');

// Set context to 2D
var context = _canvas.getContext('2d');

const gravity = 9.81;
var velocity = 0;
var frame = 0;

let currentTime = new Date().getSeconds();
let storedTime = currentTime;
let timeOffset = 0;

function CheckDate() {
    currentTime = new Date().getSeconds();

    if(storedTime != currentTime)
    {

        storedTime = currentTime;
        frame = 0;
        DrawDroplet();

    } 

    window.requestAnimationFrame(CheckDate);
}

function DrawDroplet() {

    frame += 1;
    velocity = gravity * Math.pow((frame/4), 2); 
    context.clearRect(0, 0, window.screen.width, window.screen.height);

    Circle(_canvas.width/2, 50, 50, '#B2FFFF', '#B2FFFF');

    WaterDroplet(_canvas.width/2, velocity, 100, 160, '#B2FFFF');

    if(velocity < 1200) {
        window.requestAnimationFrame(DrawDroplet);
    }
}

function RandomRange(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1) ) + min;
    //returns a random integer. Both the minimum and the maximum are inclusive.
}

function IsocelesTriangle (x, y, width, height, fillColor, strokeColor) {

    //Optional parameters
    context.fillStyle = fillColor !== undefined ? fillColor : 'white';
    context.strokeStyle = strokeColor !== undefined ? strokeColor : 'black';

    context.beginPath();

    //angle A
    context.moveTo(x, y - (height/2));

    //side AB 
    context.lineTo(x + (width/2), y + (height/2));

    //side BC
    context.lineTo(x - (width/2), y + (height/2));

    //side CA
    context.closePath();

    context.fill();
    context.stroke();

}

function Circle(x, y, radius, fillColor, strokeColor) {

    //Optional parameters
    context.fillStyle = fillColor !== undefined ? fillColor : 'white';
    context.strokeStyle = strokeColor !== undefined ? strokeColor : 'black';

    context.beginPath();

    //create a 360 degree arc
    context.arc(x, y, radius, 0, Math.PI * 2);

    //initialize the arc as a circle
    context.closePath();

    context.fill();
    context.stroke();

}

function WaterDroplet(x, y, width, height, color) {

    //Optional parameters
    context.fillStyle = color !== undefined ? color : 'white';
    context.strokeStyle = color !== undefined ? color : 'black';

    let radius = width/2;

    context.beginPath();

    context.arc(x, y, radius, Math.PI * 1.9, Math.PI * 1.1);

    //go from the left end of the arc to the vertex of the droplet
    context.lineTo(x, y - height);

    //go from the vertex of the droplet to the right end of the arc
    context.closePath();

    context.fill();
    context.stroke();

}

window.onload = setTimeout(CheckDate, 3000);