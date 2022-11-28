export default class Rectangle {
  width;
  height;

  constructor(w,h){
    this.width = w;
    this.height = h;
  }

  getSquare(){
    return this.height*this.width;
  }
  getPerimeter(){
    return (this.height+this.width)*2;
  }

}