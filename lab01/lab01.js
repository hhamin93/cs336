/*
Lab01 started by Hamin Hong on Sept. 12th, 2018
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

var user2 = new birthday("Jungmin", 1, 9, 1995, "unknown");
console.log(user2);
user2.ages();
console.log(user2);

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


//encapsulation, inheritance, and polymorphism enables 
//protection and use of data and management.

person.prototype.introduction = function(){
	console.log("Hello! my name is", this.Name);
}

var user4 = new person("Frog_prince");
user4.introduction();

