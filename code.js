
var myString = "hello world";
var myBool = false;
function f1() {}
var f2 = function() {

};

// Functions
function justDo() {}
function getSomething() { return something;}
function doWithArg(arg) { //use arg}
function doWithArgs(arg1,arg2) { //use arg1 or arg2}

// Methods
var ops = {
add : function addNumbers(n1,n2) {
	return n1+n2;
	}
};	

var x = ops.add(3,5); //x==8
var y = ops.addNumbers(3,5) // not valid

// Scope
var x = 2000;
function someFunc() {
	var y=12;
	return y;
}
var z=x+y; // invalid use of y
var z=x+someFunc(); // z==2012

// Functions in Functions
function outerFunction(n) {
	function innerFunction() {
		return n*n;
	}
	return innerFunction();
}

var x=outerFunction(4); // x==16
// innerFunction cannot be called directly

// Immediate Functions
(function(){}());
//OR
(function(){})();

// Module Pattern
var mod = (function() {
	var m=2000, c=0, d=10, y=2;
	return {
		getHiddenYear: function() {
			return m+c+d+y
		}
	}
}());

var x = mod.getHiddenYear(); // x == 2012

function add(n1, n2) {
	return n1+n2;
}

function calc(n1,n2, processForCalc) {
	return processForCalc(n1,n2);
}

function executeMath() {
	console.log(calc(1,3,add));
}

//Arrays
var x = [];
var fruit = ["apple", "orange", "banana", "strawberry", "cherry"];
fruit.sort();
fruit.push("pear");
fruit.pop();
var vegetables = ["carrot", "broccoli", "cauliflovd"];
fruit = fruit.concat(vegetables); // immmutable
fruit = fruit.slice(0,1);
fruit.splice(1,2, "melon", "grape");
fruit = fruit.map(function(x){ return x.toUpperCase() });
fruit = fruit.filter(function(x){ return x[0] === "a"; });
test1 = fruit.every(function(x){ return x[0] === 'a'; }); // false
test2 = fruit.some(function(x){ return x[0] === 'a'; }); // true

fruit.forEach(function(x){
	console.log(x);
});

// Objects
var dog = {};
dog.breed = "German Shepherd";
dog.bark = function() { console ("woof"); };

var cat = {
	breed : "good cat",
	meaow : function() {console.log("meaow")}
}

// JSON allows only data not functions

// Quering the DOM
var x = document.getElementById('visible-area');
//OR 
var x = document.querySelector('#visible-area');

var x = document.querySelectorAll('span'); // x is array/list
var x = document.querySelectorAll('.topten-item'); // returns list of elements having class of .topten-item
var x = document.querySelector('.topten-item'); // return 1st element having class .topten-item

// DOM Manipulations
var x = document.querySelector('#anyID');
x.innerText = "changed";
x.className = "item";
//or
x.classList.add("item");

// try - catch - finally
try {
	// line(s) of suspicious code
} catch(err) {
	// .description
	// .message
	// .name
	// .number
	// .stack
} finally {
	// success or failure, code executes here
}

// throw
function throwHelper() {
	var err = new Error(123, "Error in helper");
	throw err;
}

// else where in code
try {
	throwHelper();
} catch(ex) {
	var msg = ex.number + ": " + ex.message;
	// log msg
}

var x = document.getElementByID('pic');
dir(x) // all methods we can call n x