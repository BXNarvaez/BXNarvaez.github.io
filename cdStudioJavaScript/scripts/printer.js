const interval = 1000;
var angle = 1;

function RandomRange(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1) ) + min;
    //returns a random integer. Both the minimum and the maximum are inclusive.
}

function draw()
{
    var canvas = document.querySelector('#canvas');

    if(canvas.getContext) 
    {
        var ctx = canvas.getContext('2d');
        ctx.translate(canvas.width/2,canvas.height/2);

        var minPos = canvas.width/2 * -1; 
        var maxPos = minPos * -1; //maxPos is just the negative of minPos. This is also the radius of the circle.

        for (let index = 0; index < 1000; index++) {
            
            let posX = RandomRange(minPos, maxPos);
            let posY = RandomRange(minPos, maxPos);

            let size = RandomRange(1, 4)

            if(Math.pow(maxPos, 2) > Math.pow(posX, 2) + Math.pow(posY, 2))
            {
                ctx.fillStyle = 'rgb(200, 0, 0)';
                ctx.fillRect(posX, posY, size, size);
            }
            
        }
    } 
    else 
    {
        console.log(" 'Canvas' is not supported by this browser")
    }

    setInterval( function() 
    {
    // Create a temp canvas to store our data (because we need to clear the other box after rotation.
    let tempCanvas = document.createElement("canvas");
    let tempCtx = tempCanvas.getContext("2d");
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;
    // put our data onto the temp canvas
    tempCtx.drawImage(canvas, 0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#ffa6aa";
    ctx.fillRect(-350, -350, 700, 700);

    ctx.save();

    ctx.rotate(angle * Math.PI/180);
    // Finally draw the image data from the temp canvas.
    ctx.drawImage(tempCanvas, 0, 0, 700, 700, -350, -350, 700, 700);
    ctx.restore();
    }, interval);
}

const canvasDiv = document.querySelector('#canvas-center-div');
canvasDiv.onload = draw();