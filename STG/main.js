var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

class gameManager{

}



class player{
    constructor(x,y,radius,color)
    {
        this.pos_x = x;
        this.pos_y = y;
        this.radius = radius;
        this.color = color;
    }
    move(){
        if(rightPressed){
            this.pos_x+=5;
        } else if(leftPressed){
            this.pos_x-=5;
        } else if(upPressed){
            this.pos_y-=5;  //캔버스가 커질수록 아래로감
        } else if(downPressed){
            this.pos_y+=5;  //캔버스가 작아질수록 위로감
        }
    }
    draw()
    {
        context.beginPath();
            context.arc(this.pos_x,this.pos_y,this.radius,0,2*Math.PI)
            context.fillStyle = this.color;
            context.fill()
        context.closePath();
    }

}

class bullet{
    constructor(vec_x,vec_y,radius,vecmel,color){
        this.position_x = char_player.pos_x;
        this.position_y = char_player.pos_y;
        this.radius = radius;
        this.color = color;
        this.vecmel = vecmel;
        this.vec_x = vec_x;
        this.vec_y = vec_y;
    }
    move(){
        this.position_x = this.position_x + this.vec_x*this.vecmel;
        this.position_y = this.position_y + this.vec_y*this.vecmel;
    }
    draw()
    {
        context.beginPath();
            context.arc(this.position_x, this.position_y, this.radius, 0, 2*Math.PI);
            context.fillStyle = this.color;
            context.fill();
        context.closePath();
    }
}

var char_player = new player(100,100,20,'skyblue');
char_player.draw();

var bullets = [];

canvas.onclick = function(event){
    let clickpos_x = event.clientX -context.canvas.offsetLeft;
    let clickpos_y = event.clientY -context.canvas.offsetTop;

    let dis = Math.sqrt(Math.pow((clickpos_x-char_player.pos_x), 2) + Math.pow(clickpos_y-char_player.pos_y, 2));
    console.log(dis);
    //도착점-시작점으로 계산해서 총알의 벡터를 구함
    //피타고라스 정리를 통한 두 점의 거리를 계산한다.
    let vec_x = (clickpos_x-char_player.pos_x) / dis;
    let vec_y = (clickpos_y-char_player.pos_y) / dis;
    // 총알의 벡터/계산된 거리값 = 단위 벡터 이다. 1단위 벡터로 만들었기에 1만큼의 거리를 가는 동일 방향 벡터값을 얻었다.

    bullets.push(new bullet(vec_x,vec_y,5,5,'pink'));
}; 

var fps = 60;
setInterval(Loop , 1000/fps)

function Loop (){
    update();
    rendering();
}
function update(){
    char_player.move();
    for(var i in bullets){
        bullets[i].move();
    }
    
}
    function rendering(){
    context.fillStyle = "green";
    context.fillRect(0, 0, canvas.width, canvas.height);

    char_player.draw();
    for(var i in bullets){
        bullets[i].draw();
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;

// 먼저 눌린 키를 수신할 이벤트 리스너 필요
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
// target.addEventListener(type, listener[, useCapture]);
// useCapture true 이면, Capturing 방식으로 이벤트가 전달되며, false 이며, Bubling 방식으로 이벤트가 전달된다. 기본값은 false이다.
// Capturing(부모 객체부터 자식 객체로), Bubbling(자식 객체에서 부모 객채로)
// Event객체의 event.preventDefault() 함수는 기본 이벤트 핸들러의 동작을 막는다.

// 키보드가 눌렸을 때 일어나는 함수 (매개변수: e [이 때 e는 이벤트를 의미함])
// 각 방향키의 keycode와 방향이 맞다면, 해당 변수들 true 
function keyDownHandler(e) {
	if(e.keyCode == 87) {       //w:87
        upPressed = true;
	}
	if(e.keyCode == 83) {       //s:83
        downPressed = true;
    }
    if(e.keyCode == 65) {       //a:65
        leftPressed = true;
    }
    if(e.keyCode == 68) {       //d:68
        rightPressed = true;
    }
}
 
 
// 키보드가 안 눌렸을 때 일어나는 함수 (매개변수: e)
// 각 방향키의 keycode와 방향이 맞다면, 해당 변수들 false > 초기화
function keyUpHandler(e) {
    if(e.keyCode == 87) {       //w:87
        upPressed = false;
	}
	if(e.keyCode == 83) {       //s:83
        downPressed = false;
    }
    if(e.keyCode == 65) {       //a:65
        leftPressed = false;
    }
    if(e.keyCode == 68) {       //d:68
        rightPressed = false;
    }
}