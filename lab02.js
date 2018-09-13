/*
Lab02 started by Hamin Hong on Sept. 12th, 2018
CS 336
Professor Vander Liden
*/


// function as first-class object with a person's name
function person(Name){
	this.Name = Name;
}

var user1 = new person("John");

console.log(user1);

//mutator method to change name

person.prototype.rename = function( newname){
	this.Name = newname;
}

user1.rename("Coffee");
console.log(user1);

//Adding birthday using inheritance
function birthday(){
	person.call(this,Name);
}

function birthday(Name, day, month, year, age){
	person.call(this, Name);
	this.month = month;
	this.year = year;
	this.age = age;
	
}

console.log( "user1 is an instanceof person?",user1 instanceof person);

birthday.prototype = Object.create(person.prototype);
birthday.prototype.ages = function() {

    var today = new Date();
    var birthyear = new Date(this.year);
    var birthmonth = new Date(this.month);
    var birthdate = new Date(this.date);
    this.age = today.getFullYear() - birthyear;
    var m = today.getMonth() - birthmonth;
    if (m < 0 || (m === 0 && (today.getDate() < birthdate))) {
        this.age--;
    }
    
}

var user2 = new birthday("Jungmin", 14, 8, 1995, "unknown");
console.log(user2);
user2.ages();
console.log(user2);

console.log( "user2 is an instanceof person?",user2 instanceof person);


//List of friends! & the method for adding onto the list

function friends() {
	person.call(this,Name);
}

function friends(Name, list){
	person.call(this, Name);
	this.list = [];
}

friends.prototype = Object.create(person.prototype);
friends.prototype.add = function(friend) {
	this.list.push(friend);
}

var user3 = new friends();
console.log(user3);
user3.rename("Hamin");
console.log(user3);
user3.add("Steve Jobs");
console.log(user3);
user3.add("Bill");
console.log(user3);


console.log( "user3 is an instanceof person?",user3 instanceof person);



//encapsulation, inheritance, and polymorphism enables such use of data and management.

person.prototype.introduction = function(){
	console.log("Hello! my name is", this.Name);
}

var user4 = new person("Frog_prince");
user4.introduction();

console.log( "user4 is an instanceof person?",user4 instanceof person);


function student(Name, subject){
	person.call(this,Name);
	this.subject = subject;
}

student.prototype = Object.create(person.prototype);
student.prototype.subjects = function(subjectC) {
	this.subject = subjectC;
}

var user5 = new student("Jacob", "Undeclared");
console.log(user5);
user5.subjects("Squirrel Psychology");
console.log(user5);
user5.rename("Watch");
console.log(user5);
user5.introduction();

console.log( "user5 is an instanceof person?",user5 instanceof person);
console.log( "user5 is an instanceof birthday?",user5 instanceof birthday);
console.log( "user5 is an instanceof friends?",user5 instanceof friends);
console.log( "user5 is an instanceof student?",user5 instanceof student);
//The instanceof function shows that function student uses inheritance
//and polymorphism to get access to the parent function person,
//but not those of birthday and friends(encapsulation)

