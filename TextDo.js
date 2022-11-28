export default class TextDo {
  text;
  constructor (t){
    this.text = t;
  }
  colT(){
    return this.text.length;
  }
  findZero(){
    let rezult = 0;
    for(let i =0;i<this.text.length;i++){
      if(this.text[i]==" "){
        rezult++;
      }
    }
    return rezult;
  }
  retWords(){
    return this.text.split(' ');
  }
}