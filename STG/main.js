import { Position2D,Vector2D} from "./Vector"

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
export{context};

import { player } from "./Player.js"
import { bullet,bullet2 } from "./bullet.js"

var char_player = new player(100,100,20,'skyblue');
//캐릭터 생성(위치좌표,크기(반지름),색깔)
var bullets = [];
//총알 배열로 선언하기

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

    bullets.push(new bullet(char_player.pos_x, char_player.pos_y, vec_x, vec_y, 5, 5, 'pink'));
    //여기까지만 했음///////////////////////////////
    bullets.push(new bullet2(V));
    ///////////////////////////////////////////////
}; 
//총알 생성(단위벡터,속도,크기(반지름),색깔)

var fps = 60;
setInterval(Loop , 1000/fps)

function Loop (){
    update();
    rendering();
}
function update(){
    allObjectmove();
    
}
    function rendering(){
    ReDrawcanvas();

    allObjectDraw();
}

//Update functions
function allObjectmove(){
    char_player.move();
    for(var i in bullets){
        bullets[i].move();
    }
}

//Rendering functions
function ReDrawcanvas(){
    context.fillStyle = "green";
    context.fillRect(0, 0, canvas.width, canvas.height);
}
function allObjectDraw(){
    char_player.draw();
    for(var i in bullets){
        bullets[i].draw();
    }
}