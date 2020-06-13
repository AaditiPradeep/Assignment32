class BaseClass  {
  constructor(x, y, width, height){
    var options = {
      'restitution':1.2,
      'friction':0.5,
      'density':0.2
  }

  this.body = Bodies.rectangle(x, y, width, height, options);
  this.width = width;
  this.height = height;
  World.add(world, this.body);
  this.Visibility = 255;
 
}
score(){
  if(this.Visibility<0 && this.Visibility>-900){
   score++;
   }
}
 
  display(){
     if(this.body.speed<6) {
        var pos1 = this.body.position;
        push();
        rectMode(CENTER);
        rect(pos1.x, pos1.y, this.width, this.height);
        pop();
          }
          else {
          World.remove(world, this.body);
          push();
          this.Visibility = this.Visibility - 10;
          tint(255, this.Visibility);
          pop();
          }
        }
}
  

  

