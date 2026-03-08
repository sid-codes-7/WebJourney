const canvas  = document.getElementById("canvas"); //get the canvas from HTML
const ctx = canvas.getContext("2d");//"getting the pencil to start drawing"

//makes the canvas the same size as the window
canvas.height = window.innerHeight; // get the height of the window
canvas.width = window.innerWidth;// get the width of the window

ctx.fillStyle = "white"; // the next thing drawing should be color: white
ctx.beginPath();//just "lifting" the pencil to start drawing

// (x, y , radius, start angle, full circle)   
ctx.arc(200, 200, 2, 0, Math.PI * 2); // draw circle

ctx.fill(); // render the shape


