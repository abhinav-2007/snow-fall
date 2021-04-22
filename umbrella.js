class umbrella{
    constructor(x,y){
        var option={
            isStatic:true
        }
        this.image=loadImage("images/Walking Frame/walking_1.png");
        this.umbrella=Bodies.circle(x,y,50,option);
        this.radius=50;
        World.add(world,this.umbrella);
        
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.umbrella.position.x,this.umbrella.position.y,300,300);
    }
}