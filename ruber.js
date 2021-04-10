class ruber {
    constructor(x, y, w) {
        var options = {
            'restitution':0.3,
            'friction':5,
            'density':1.0
        }
        this.x=x;
        this.y=y;
        this.w=w;

        this.body =Bodies.circle(x, y, w,options);
       
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        //var w = this.body.w;
        push();
        translate(pos.x, pos.y);
        //rectMode(CENTER);
        
        fill("blue");
ellipseMode(RADIUS);

        ellipse(0, 0, this.w,this.w);
        pop();
      }
}