var Person = new Object();
// 'new' means brand new object required, 'Object' is a keyword, '() are a constructor' 

Person.age = 55;
Person.name = "markson aigbodi";
Person.score = [2,4,6,8,10];
Person.company = "sparta global";

Person.test = function(){
	alert("testing function");
}

Person.scream2 = function(){
	return "shouting!!!"
}

var result = Person.scream2();
console.log(result);

// Person.getage = function(){
// console.log(this.age);
// }

// Person.test();
// Person.getage();

// console.log(Person);
// console.log(Person.test);
// Person.test();


//

var Car = Object.create(Object.prototype); //using create, 2nd way to create objects.
Car.engineSize = "V12"; // use camel case
console.log(Car.engineSize); 

//

var Zoo = function(){
	this.name = "London Zoo";
	this.postCode = "NW2 3ZK"
	this.box = [3,6,9,12,15];
	this.county = "United Kingdom";

	this.label = function(){
		console.log(this.name);
	}
}


// Person.test();
// Person.getage();

// console.log(Person);
// console.log(Person.test);
// Person.test();

	




