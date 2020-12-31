var mouseEvent = "empty";
var last_position_of_X , last_position_of_Y;


var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var color = "black";
var width_of_line = 1;


canvas.addEventListener("mousedown", my_mousedown);

 function my_mousedown(e) { 
     mouseEvent = "mouseDown";
    }

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){
    var current_postion_of_X = e.clientX - canvas.offsetLeft;
    var current_postion_of_Y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.linewidth = width_of_line;
        console.log("The last position of X and Y cordinates =");
        console.log(last_position_of_X,last_position_of_Y);
        ctx.moveTo(last_position_of_X,last_position_of_Y);

        console.log("The current position of X and Y cordinates =");
        console.log(current_postion_of_X,current_postion_of_Y);
        ctx.lineTo(current_postion_of_X,current_postion_of_Y);
        ctx.stroke();

    }

    last_position_of_X = current_postion_of_X;
    last_position_of_Y = current_postion_of_Y;

}

canvas.addEventListener("mouseup",my_mouseUp);

function my_mouseUp(e){
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave",my_mouseLeave);

function my_mouseLeave(e){
    mouseEvent = "mouseLeave";
}