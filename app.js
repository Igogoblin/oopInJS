import Rectangle from './Rectangle.js';
import TextDo from './TextDo.js';
class Circle {
#radius;
#n = 3.14;
	constructor(radius){
		this.#radius = radius;
	}
	getRad(){
		return this.#radius;
	}
	setRad(radius){
		this.#radius = radius;
	}
 sCircle(){
return this.#n*this.#radius*this.#radius;
 }
 lCircle(){
	return this.#n*2*this.#radius;
 }
}

// площадь круга, длину окружности
let cir1 = new Circle;

cir1.setRad(3);
console.log(cir1.sCircle());
console.log(cir1.lCircle());


let rec = new Rectangle(2,3);
// rec(2,3);
console.log('perimetr  : '+rec.getPerimeter());

let txt  = new TextDo('test and check');
console.log(txt.colT());
console.log(txt.findZero());
console.log(txt.retWords());