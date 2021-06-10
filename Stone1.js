class Stone1{
    constructor(x,y,width,height){
    var options = {
   isStatic: false,
   density: 1,
   resistution: 0,
   friction: 1
   
   }
   this.body = Bodies.rectangle(x,y,width,height,options);
this.x = x;
this.y = y;
this.width = width;
this.height = height;
this.image = loadImage("stone.png");
World.add(world, this.body);
}
display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("brown");

    image(this.image,pos.x, pos.y, this.width, this.height);
}

}
