class Bob{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(x,y,20,options);
        World.add(world,this.body);
    }
    
    display(){
        push();
        translate(this.body.position.x,this.body.position.y)
        ellipseMode(RADIUS);
        fill("pink");
        ellipse(0,0,20,20);
        pop();
    }
}