var canvas = document.getElementById('game');
var context = canvas.getContext('2d'); //player path
var clickonoff=false;

class Player{
    constructor(x,y,radius,Pcolor){
        this.pos_x = x;
        this.pos_y = y;
        this.radius = radius;
        this.color = Pcolor;
    }

    draw(){
        context.beginPath();
        context.arc(this.pos_x,this.pos_y,this.radius,0,2*Math.PI);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }
}

var p= new Player(100,100,30,'violet');
p.draw();



function clicker(){
    let x = event.offsetX;
    let y = event.offsetY;  
    console.log(x,y);

    // context.beginPath();
    // context.arc(x,y,10,0,2*Math.PI);
    // context.fillStyle = 'skyblue';
    // context.fill();
    // context.closePath();

    clickonoff = true;
}
function clicker2(){
    let x = event.offsetX;
    let y = event.offsetY;  
    console.log(x,y);
    if(clickonoff){
    context.beginPath();
    context.arc(x,y,10,0,2*Math.PI);
    context.fillStyle = 'skyblue';
    context.fill();
    context.closePath();
    }
}

function clicker3(){
    clickonoff = false;
}
canvas.addEventListener('mousedown',  function(){clicker('')});

canvas.addEventListener('mousemove',  function(){clicker2('')});
  
canvas.addEventListener('click', function(){clicker3('')});


// offsetXY 노드 객체 기준
// pageXY 문서 기준
// screenXY, clientXY 화면전체 기준

// 1. click 
// - 사용자해 해당 element를 클릭했을 때(버튼을 눌렀다가 떼었을 때) 발생 합니다.

// 2. mousedown 
// - 사용자가 해당 element에서 마우스 버튼을 눌렀을 때 발생합니다.

// 3. mouseup 
// - 사용자가 해당 element에서 눌렀던 마우스 버튼을 떼었을 때 발생합니다.

// 4. dblclick 
// - 사용자가 해당 element에서 마우스 버튼을 더블 클릭했을 때 발생합니다.

// 5. mousemove 
// - 사용자가 해당 element에서 마우스를 움직였을 때 발생합니다.

// 6. mouseover 
// - 사용자가 마우스를 해당 element 바깥에서 안으로 옮겼을 때 발생합니다.

// 7. mouseout 
// - 사용자가 마우스를 해당 element 안에서 바깥으로 옮겼을 때 발생합니다.

// 8. mouseenter 
// - 사용자가 마우스를 해당 element 바깥에서 안으로 옮겼을 때 발생합니다.
// - 버블링이 발생하지 않습니다.

// 9. mouseleave 
// - 사용자가 마우스를 해당 element 안에서 바깥으로 옮겼을 때 발생합니다.
// - 버블링이 발생하지 않습니다.

// 10. contextmenu 
// - 마우스 오른쪽 버튼을 눌렀을 때 발생합니다.
