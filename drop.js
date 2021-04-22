class rain{
    constructor(x,y){
        this.image = loadImage("images/snow/snow4.webp");

        var options={
            restitution:0.1,
            friction:0.001

        }
        this.rain=Bodies.circle(x,y,5,options);
        this.radius=5;
        World.add(world,this.rain);
    }
    update(){
        if(this.rain.position.y>height){

            Matter.Body.setPosition(this.rain,{x:random(0,1200),y:random(0,400)});
        }
    }
    showdrop(){ 
        fill("white");
        rain.scale =6;
        ellipseMode(CENTER);
        ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);



    }

}