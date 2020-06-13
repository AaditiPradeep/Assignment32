class Block2 extends BaseClass  {
  constructor(x, y, width, height){
    super(x, y, width, height);
    this.Visibility = 255;
  }
 display(){
fill("blue");
super.display();
  }

}
