canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

color = "blue";
width_of_line = 3;

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width_of_line;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();

color = "yellow";
width_of_line = 3;

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width_of_line;
ctx.arc(250,250,40,0,2*Math.PI);
ctx.stroke();

color = "black";
width_of_line = 3;

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width_of_line;
ctx.arc(300,200,40,0,2*Math.PI);
ctx.stroke();

color = "green";
width_of_line = 3;

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width_of_line;
ctx.arc(350,250,40,0,2*Math.PI);
ctx.stroke();

color = "red";
width_of_line = 3;

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width_of_line;
ctx.arc(400,200,40,0,2*Math.PI);
ctx.stroke();