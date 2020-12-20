class Box{
  constructor(x,y,width,height){
      var options={
          restitution:1,
          'friction' :0.3,
          'density' :1.0
      }
      
      this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
  }
  display(){
    push();
      translate(this.body.position.x,this.body.position.y);
      rotate(this.body.angle);
      fill(255);
      strokeWeight(5);
      stroke("red");
      rectMode(CENTER);
      rect(0,0,this.width,this.height);
    pop();

      
  }    
  
    
}