class User {
	#name;
	
	setName(name) {
		this.#name = name;
	}
	getName() {
		return this.#name;
	}
}

class Student extends User {
	
}

let student = new Student();
student.setName('john');
// student.setYear(1);
let name = student.getName();
// let y = student.getYear();
console.log(name);