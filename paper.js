class paper{
    constructor(x, y,radius ) {
      var options = {
        'density':1.5,
        'friction': 1.0,
        'restitution':0.5
      };
      this.body = Bodies.circle(x, y, radius, options);
      this.radius=radius
      this.paper=loadImage("paper.png")
      World.add(world, this.body);
      
    };
    display(){
        
        ellipseMode(RADIUS)
        fill("yellow");
        //image(this.paper,200,20);
        circle(this.body.position.x,this.body.position.y,this.radius)
        
    };
};