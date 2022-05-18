import{context} from "./main.js"
import{rightPressed,leftPressed,upPressed,downPressed} from "./inputManger.js"

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

export{player}