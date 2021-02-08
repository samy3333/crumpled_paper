class Paper{
    constructor(x, y, rad){
        var options={
            isStatic:true,
            restitution:0.3,
            friction: 0.5,
            density:1.2,
        }
        this.x=x;
		this.y=y;
		this.rad= rad;
		this.image = loadImage("paper.png");
		this.body=Bodies.circle(x, y, rad, options);
 		World.add(world, this.body);
    }
    display()
	{
		
			
			var Pos=this.body.position;		

			push()
			translate(Pos.x, Pos.y);
			imageMode(CENTER)
			image(this.image, 0, 0, this.rad);
			strokeWeight(4);
			fill("white")
			//ellipse(0,0,this.rad, this.rad);		
			pop()
			
	}
}

