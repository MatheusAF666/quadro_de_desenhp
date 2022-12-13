// dados iniciais

let currentColor = "black";
let canDraw = false;
let mouseX = 0;
let mouseY = 0;

let screen = document.querySelector('#tela');
let ctx = screen.getContext("2d");

// eventos
document.querySelectorAll('.colorArea .color').forEach(item=>{  
        item.addEventListener('click', colorClickEvent);
});

screen.addEventListener('mousedown', mouseDownEvent);
screen.addEventListener('mousemove', mouseMoveEvent);
screen.addEventListener('mouseup', mouseUpEvent);

document.querySelector('.clear').addEventListener('click', clearScreen);


// Funçoes
function colorClickEvent(e) {
    let color = e.target.getAttribute('data-color');
    currentColor = color;

    document.querySelector('.color.active').classList.remove('active');
    e.target.classList.add('active');
}

function mouseDownEvent(e) {
    canDraw = true;
    mouseY = e.pageX - screen.offsetLeft;
    mouseY = e.pagey - screen.offsetTop;
}

function mouseUpEvent() {
    canDraw = false;
}

function mouseMoveEvent(e) {
    if(canDraw){
        Draw(e.pageX, e.pageY);
    }
}

function Draw(x, y){
    let pointX = x - screen.offsetLeft;
    let pointY = y - screen.offsetTop;
    
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineJoin = 'round';
    ctx.moveTo(mouseX, mouseY);
    ctx.lineTo(pointX, pointY);
    ctx.closePath();
    ctx.strokeStyle = currentColor;
    ctx.stroke();


    mouseX = pointX;
    mouseY = pointY;
}

function clearScreen(){
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}