"use strict";

const yellow = "#FFFF00";
const red = "#FD1C03";
const green = "#33FF00";
const blue = "#0062FF";
const cyan = "#00FFFF";
const pink = "#CC00FF";

function draw(){
    var canvas = document.getElementById("canvas");
    if(canvas.getContext){
        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;

        var ctx = canvas.getContext("2d");

        var colors = [yellow, blue, cyan, pink];
        colors = colors.concat([red, green]);
        // 寒色系を多めにしてるっす
        var numOfTriangles = 150;
        for(var i = 0; i < numOfTriangles; ++i){
            var x = Math.floor(Math.random()*canvas.width);
            var y = Math.floor(Math.random()*canvas.height);
            var color = colors[Math.floor(Math.random() * colors.length)];
            var rotate = Math.floor(Math.random()*4)*90;
            drawTriangle({ctx:ctx, x:x, y:y, rotate:rotate, color:color});
        }

        window.onresize = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            draw();
        };
    }
}

function drawTriangle(parameters){
    const ctx = parameters.ctx;
    if (ctx == null) {
        throw new Error();
    }
    const x = parameters.x;
    const y = parameters.y;
    const width = parameters.width || 25;
    const height = parameters.height || 25;
    const rotate = parameters.rotate || 0;
    const lineWidth = parameters.lineWidth || 2;
    const color = parameters.color || "#000000";

    draw(ctx,x,y,width,height,rotate,lineWidth,color);

    function draw(ctx,x,y,width,height,rotate,lineWidth,color){
        ctx.save();
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.translate(parseInt(canvas.width/2), parseInt(canvas.height/2));
        ctx.rotate(rotate/180*Math.PI);
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(x+width,y+width);
        ctx.lineTo(x+width,y-width);
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
    }
}
