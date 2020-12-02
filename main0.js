//console.log('hello world');
//console.error('this is an error');
// console.warn('this is a warning');
//const age = 30;
//const rating = 4.5;
//const x =null;
//const y =undefined;
//let z;
// concatenation
//console.log('My name is '+name+' and my age is '+age);
// Templae String
//console.log(`My name is ${name}+ and my age is ${age}`);
/*

const s ='Hello World';
const a = 'technology, computers, it, code';

console.log(s.length);

console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0,5));
console.log(s.substring(0,5).toUpperCase());
console.log(s.split(''));
console.log(a.split(', '));
//Arrays - variables that hold multiple value
const fruits = ['apples','oranges','pears'];
fruits[3] = 'grapes';
fruits.push('mangos');// add the string in the last of arrey
fruits.unshift('strawberries');// add the strig in the first of the arrey
console.log(fruits[1]);
console.log(Array.isArray('hello'));
console.log(Array.isArray('oranges'));
console.log(fruits.indexOf('oranges'));
const person = {
firstName: 'Jone',
lastName: 'Doe',
age: 30,
hobbies:['music','movies','sports'],
address: {
	street: '50 main st',
	city: 'boston',
	state : 'et'
}
}
console.log(person.firstName,person.lastName);
console.log(person.address.city);
console.log(person.hobbies[1]);

const todos = [
{
	id: 1,
	text: 'Take out trush',
	isCompleted:true
},
{
	id: 2,
	text: 'Meeting with boss',
	isCompleted:true
},
{
	id: 3,
	text: 'dentist appt',
	isCompleted:false
}
];
console.log(todos[1].text);

const todoJSON = JSON.stringify(todos);  //used to convert to JSON
console.log(todoJSON);

//for
for (let i =  1; i <= 10; i++) {
	console.log(`For loop Number is  ${i}`);
}
let i = 0;
while(i<10){
		console.log(`while loop Number is  ${i}`);
		i++;
}
for (let i = 0; i < todos.length; i++) {
	console.log(todos[i].text);
}
for(let todo of todos){
	console.log(todos.text);
}
//forEach, map, filter
todos.forEach(function(todo){
console.log(todo.text);
});

const todoText = todos.map(function(todo){
return todo.text;
});
console.log(todoText);

const todoCompleted = todos.filter(function(todo){
return todo.isCompleted === true;
});
console.log(todoCompleted);

const x='10';
if(x == 10){
 console.log("x is 10");
}
if(x === 10){
 console.log("x is 10");
}
const t=10;
const color = t > 10 ? 'red' : 'blue';
console.log(color);
switch(color){
	case 'red':
	console.log('colore is read');
	break;
	case 'blue':
	console.log('colore is blue');
	break;
	default:
	console.log('colore is Not red and blue');
	break;
}
function addNum1(num1,num2){
console.log(num1+num2);
}
addNum1(1,4);

function addNum(num1,num2){
return num1+num2;
}
console.log(addNum(9,4));
//constracto function

function Person(firstName, lastName,dob){
	this.firstName=firstName;
	this.lastName=lastName;
	this.dob= new Date(dob);
	this.getBirthYear = function(){
		return this.dob.getFullYear();
	}
	this.getFullName = function(){
		return `${this.firstName} ${this.lastName}`;
	}
}
//instantiate object
const person1 = new Person('john','Doe','4-3-1980');
const person2 = new Person('Mary','Smith','3-6-1980');
console.log(person2.firstName);
console.log(person2.dob);
console.log(person2.dob.getFullYear());

console.log(person1.getBirthYear());
console.log(person1.getFullName());
console.log(person1);

function Person(firstName,lastName,dob){
	this.firstName=firstName;
	this.lastName=lastName;
	this.dob=new Date(dob);
}
Person.prototype.getBirthYear = function(){
	return this.dob.getFullYear();
}
Person.prototype.getFullName = function(){
	return `${this.firstName} ${this.lastName}`;
}
*/
//Class
class Person{
	constructor(firstName,lastName,dob){
	this.firstName=firstName;
	this.lastName=lastName;
	this.dob=new Date(dob);
}
getBirthYear(){
	return this.dob.getFullYear();
}
getFullName(){
	return `${this.firstName} ${this.lastName}`;
}
}


//instantiate object
const person1 = new Person('john','Doe','4-3-1980');
const person2 = new Person('Mary','Smith','3-6-1980');
console.log(person2.getFullName());
console.log(person1);