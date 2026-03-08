const canvas  = document.getElementById("canvas"); //get the canvas from HTML
const ctx = canvas.getContext("2d");//"getting the pencil to start drawing"

//makes the canvas the same size as the window
canvas.height = window.innerHeight; // get the height of the window
canvas.width = window.innerWidth;// get the width of the window

for(let i = 0; i< 300; i++) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;

    ctx.fillStyle = "white"; // the next thing drawing should be color: white
    ctx.beginPath();//just "lifting" the pencil to start drawing

    // (x, y , radius, start angle, full circle)   
    ctx.arc(x, y, 2, 0, Math.PI * 2);

    ctx.fill(); // render the shape

}

let centerX = canvas.width / 2;
let centerY = canvas.height / 2;


ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(centerX, centerY, 100, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = "black";
ctx.beginPath();
ctx.arc(centerX, centerY, 80, 0, Math.PI * 2);

ctx.fill();


