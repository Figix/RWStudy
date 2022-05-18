import { Position2D,Vector2D} from "./Vector.js"

import{context} from "./main.js"

class bullet{
    constructor(originX,originY,vec_x,vec_y,radius,vecmel,color){
        this.position_x = originX;
        this.position_y = originY;
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

class bullet2{
    constructor(Position2D,Vector2D,radius,vecmel,color){
        this.Position2D.posX = Position2D.posX;
        this.Position2D.posY = Position2D.posY;
        this.radius = radius;
        this.color = color;
        this.vecmel = vecmel;
        this.Vector2D.vecX = Vector2D.vecX;
        this.Vector2d.vecY = Vector2D.vecY;
    }
    move(){
        this.Position2D.posX = this.Position2D.posX + this.Vector2D.vecX * this.vecmel;
        this.Position2D.posY = this.Position2D.posX + this.Vector2D.vecY * this.vecmel;
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
export{bullet}