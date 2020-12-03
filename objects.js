var students= {
	firstName: "kishan",
	lastName:"Dev",
	surName:"Pithani"
};
console.log(students.firstName);

//Various types of declarations:
var students1 = new Object();
students1.firstName1 = "kishan";
students1.lastName1 = "Dev";
console.log(students1);

//method 2:
var students2={};
students2.firstName2="zack";
students2.lastName2="krish";
students2.age=55;
console.log(students2);

//method 3:
var students3=[];
students3.push(students1);
students3.push(students);
students3.push(students2);
console.log(students3);

//through function:
var students4={
	firstName4:"kishan",
	lastName4:"dev",
	middleName4:"dev kishan",
	greeting: function() {
		return "hi" + this.firstName4+this.middleName4+this.lastName4;
	}
};
console.log(students4.greeting());
//reusable method 2:
var students5 =[];
function studentsed(first,last,age){
	this.firstName5= first;
	this.lastName5=last;
	this.age5=age;
	this.greeting = function(){
		return "HI" + this.firstName5 + this.lastName5 + "and my age is:" + this.age5 + "years old";

	};
}

var s1 = new studentsed("dev","krish",5);
console.log(s1);
console.log(s1.greeting());

//list wise:
students5.push(new studentsed("deva","krish",5));
students5.push(new studentsed("devaaa","kearish",2));
students5.push(new studentsed("deaava","krished",4));
for(var index=0; index < students5.length; index++){
	var studentsed =students5[index];
	console.log(studentsed.greeting());
}

var studentsed = students5[0];
for (var key in students5){
	console.log(students5[key]);
}