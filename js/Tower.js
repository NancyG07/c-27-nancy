class Tower{
    constructor(x, y, width, height){
        var options = {
            isStatic:true
            }
        this.image = loadImage("./assets/tower.png");
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, this.width, this. height, options);
        World.add(world, this.body);
 }
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    var rotate = angle;
    push();
    translate(pos.x, pos.y);
   // rectMode(CENTER);
  //  rect(0, 0,this.width, this.height);
  imageMode(CENTER);
  image(this.image, 0, 0, this.width, this.height);
    pop();
}
}
