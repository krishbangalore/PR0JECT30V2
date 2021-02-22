class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("wood1.png");
    
  }
  display(){
    if(this.body.speed<3){
      super.display();
  
    }
    else{
     
      World.remove(world,this.body)
      push()
     this.visibility=this.visibility-5;
     tint(10,this.visibility)
      image(this.image,this.body.position.x,this.body.position.y,50,50)
      pop()
    }
    
    console.log(this.body.speed);
  
  
  }
}
