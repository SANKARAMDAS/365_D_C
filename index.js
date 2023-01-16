//New 
//values and variables in js
var $my_myName = 'abc xyz';  //right
var _my_myName = 'abc xyz';  //right
var _1my_myName = 'abc xyz';  //right
// var 1my_myName = 'abc xyz';  // wrong
var myAge = '20';
// console.log($my_myName)


/*----------------------------------------- */


//Data Types in JavaScript
/* undefined  boolean  number  string  int  symbol*/ 
var myName = 'abcd xyz';  //string
var myAge = 26;  //number
var iAmA = false; // boolean
var a = true;
var b = false;
c = a + b;
// console.log('String' - 'string'); //NaN
// console.log(true + true); //js 2 represent false;
// console.log(true + false); //js 1 represent true,
// console.log(false + false);  //no sense
// console.log(false - true);
//typeof oper;ator
// console.log(c);
// console.log(typeof(iAmA)); 

//Diff between null abd undefined
/*
Null -   var imUseless = null; 
undefined-  var imStandBy;
*/
//NaN?
/*
console.log('String' - 'string'); NaN

var myPhoneNumber = 1000000000;
var myName = 'abc';
console.log(isNaN(myPhoneNumber));
console.log(isNaN(myName));  //NaN

if(isNaN(myName)) {
    console.log('Enter number');
}
 */

// console.log(NaN === NaN); //false
// console.log(Number.NaN === NaN); //false
// console.log(isNaN(NaN));  //true
// console.log(isNaN(Number.NaN)); //true
// console.log(Number.isNaN(NaN));  //true



//Expression and operator
// console.log(5 + 20);
var x = 5;
var y = 10;
console.log('Both r same or not' + x==y);

a = 5;
b = '5';

// console.log( a == b); true, check the value
// console.log(a === b); false, check value + datatype

/*-------------------------------------------------------- */
//Control Statements and Loops
//if-else
var days = 'Monday';
if(days == 'Sunday') {
    console.log('School holiday');
} else {
  console.log('Go to School');
}

//leap year

var year = 2021;

if(year % 4 === 0) {
    if(year % 100 === 0){
        if (year % 400 === 0) {
             console.log('Leap Year')
        } else {
            console.log('Leap year')
        }
    } else {
        console.log('leap year')
    }
} else {
    console.log('Not leap year')
}


// 5 falsy values in Js
//0, "", undefined, NaN, null, false

if(null){
    console.log('Loss he game')
} else {
    console.log('Won the game')
}

//conditional or ternary operator
//it is a js operator which takes 3 operands.
var age = 17;

if (age >= 18 ){
    console.log('Can vote');
} else {
    console.log('Can\'t vote');
}


var age = 18;
console.log((age >= 18) ? 'Can vote' : 'Can\'t vote');


//switch statement
var area = 'square';
var PI= 3.14159, l = 5, b = 4, r = 3;
if(area == 'circle') {
  console.log('area circle ' + PI*r**2);
}else if (area == "tringle"){
    console.log('area tringle' + (l*b)/2);
}else if (area == "rectangle"){
    console.log('area rectangle' + (l*b));
}else {
    console.log('Please check');
}


var area = 'circle';
var PI= 3.14159, l = 5, b = 4, r = 3;

switch(area) {
   case 'circle' :
    console.log('area circle ' + PI*r**2);
    break;
    case 'tringle':
        console.log('area tringle' + (l*b)/2);
        break;
        case 'rectangle':  
        console.log('area rectangle' + (l*b));
        break;
        default: 
        console.log('check the data');   
}


//while loop
var num = 10;
while(num <= 10){
    console.log(num) //infinite loop
    num ++; 
}

//Do-while loop 
var num = 7;
do {
    console.log(num) //infinite loop
    num ++; 
} while(num <= 10);


//For loop
for (var num = 1; num <= 10; num ++){
    var tableOf = 8;
   console.log(tableOf + " * " + num + " = " + tableOf * num );
}

//function
/*
  function functionName(){
    do
  }
*/
function sum(){
    var a = 10, b = 20;
    var total = a + b;
    console.log(total)
}
sum();

function sum(a,b){
    var total = a + b;
    console.log(total);
}
sum(50, 50);

function sum(a,b){
    var total = a + b;
    console.log(total);
}
var funExpression = sum(5, 50);
funExpression;

function sum(a,b){
    return total = a + b;
}
var funExpression = sum(5, 10);
console.log(funExpression);

var funExpression = function(a,b){  //anonymous functin
    return total = a + b;
}
var sum = funExpression(10,20);
var sum1 = funExpression(10,50);
console.log(sum < sum1);


// var myName = "abc";
// console.log(myName);
// const myName = "abc";
// console.log(myName);
// let myNam = "abc";
// myNam= "xkjahf";
// console.log(myNam);

/* function scope and block scope */
function bioData(){
    let myNa = "abhfhgsfjkc";
    console.log(myNa);

    if(true){
        let myAg = "xyziyewtiuwe";
        console.log(`inner ` + myAg);
        console.log(`inner ` + myNa);
    }
    // console.log(`inner ` + myAg);
}    
bioData();

//template literals
for(let num = 1; num<= 10; num++){
    let tableOf = 12;
    console.log(`${tableOf} * ${num} = ${tableOf * num}`);
}

//default argument
function mult(a,b=10){
   return a * b;
}
console.log(mult(5)) ; //if I pass only 1 number it will return NaN

//arrow function
const suma = () => 
    `the sum is: ${(a=5)+(b=10)}`;
console.log(suma());

//Arrays in JS
var myFriends = new Array; //optional
// var myFriends = ['abc', 'xyz',2,male,'def','fgh'];
/* Traversal in array- navigate through array
   Get the single data at a time and also change the data
*/
var myFriends = ['abc', 'xyz','def','fgh'];
console.log(myFriends[0]);
/* check the length of methods of an array */
console.log(myFriends.length);
console.log(myFriends[myFriends.length - 1]);
/*for-in loop  and for-of loop*/
var myFriends = ['abc', 'xyz','def','fgh']; //before for-in loop
for(var i=0; i < myFriends.length; i++){
   console.log(myFriends[i]);
}

var myFriends = ['abc', 'xyz','def','fgh']; //for-if loop
for(let elements in myFriends){
    console.log(elements);
}

var myFriends = ['abc', 'xyz','def','fgh']; //for-of loop
for(let elements of myFriends){
    console.log(elements);
}

var myFriends = ['abc', 'xyz','def','fgh']; //forEach loop
myFriends.forEach(function (element, index, array) {
    console.log(element + 'index ' + index + ' ' + array);
})

myFriends.forEach((element, index, array) => {
    console.log(element + 'index ' + index + ' ' + array);
})     

//CRUD 
/*push- add element at the last */
var animals = ['abc', 'xyz','def','fgh'];
const count = animals.push('chicken', 'cat');
console.log(count);
console.log(animals);
/*unshift- add element at the starting */
var animals = ['abc', 'xyz','def','fgh'];
animals.unshift('dog','cow');
console.log(animals);

const numBers = [2,3,4,5];
numBers.unshift(1,5)
console.log(numBers);
/*pop- remove element form last */
var animals = ['abc', 'xyz','def','fgh'];
console.log(animals);
console.log(animals.pop());
console.log(animals);
/*shift- remove element from first */
var animals = ['abc', 'xyz','def','fgh'];
console.log(animals);
console.log(animals.shift());
console.log(animals);
/*add data middle of the arrays */
/* one method to perform all crud operation*/
const months = ['Jan','mar', 'Aug', 'Octaber','Nov'];
/* add a array element at last*/
/*check index no, deleteing anything or not, and array element */
const newMonth = months.splice(months.length,0,'December');
console.log(months);
console.log(newMonth);
/*update a array element */
const indexOfMonth = months.indexOf('mar');
if (indexOfMonth != -1){
    const updateMonth = months.splice(indexOfMonth,1,'Mar');
    console.log(months);
} else{
    console.log('No such data found');
}
/* delete element from array*/
const month = ['Jan','mar', 'Aug', 'Octaber','Nov'];
const indexOfMonths = month.indexOf('mar');
if (indexOfMonths != -1){
    const updateMonth = month.splice(indexOfMonths,1,);
    console.log(month);
    console.log(updateMonth);
} else{
    console.log('No such data found');
}
/*infinity - means after an element all data are delete by itself */

const monthh = ['Jan','mar', 'Aug', 'Octaber','Nov'];
const indexOfMonthss = monthh.indexOf('Aug');
if (indexOfMonthss != -1){
    const updateMonth = monthh.splice(indexOfMonthss,2);
    console.log(monthh);
    console.log(updateMonth);
} else{
    console.log('No such data found');
}

/*Map, Reduce, Filter -  these 3 is 90% used in React */
//Map- callback(currentValue,index[array])
const array1 = [1,4,3,5,16,20,22];
//number > 0
let newArray = array1.map((currElem, indexNo,array) => {
    return currElem > 9;
})
console.log(newArray);
console.log(array1);

let newAr = array1.map((currElem, index, arr) => {
    return `Index no = ${index} and value is ${currElem} belong to ${arr}`
})
console.log(newAr);

let newArr = array1.forEach((currElem, index, arr) => {
    return `Index no = ${index} and value is ${currElem} belong to ${arr}`
})
console.log(newArr);

//square root of each element
let arr = [25, 36, 49, 64, 81];

let arrSqr = arr.map((currElem) => 
    Math.sqrt(currElem))

console.log(arrSqr);

/*multiply and filter */    /* filter + map + reduce method */
let arr1 = [2,4,3,6,8];
let arr2 = arr1.map((currElem) => {
    return currElem * 2;
}).filter((currElem) => {
    return currElem > 10;
}).reduce((accumulator, currElem) => {
    return accumulator + currElem
})
console.log(arr2);

//Reduce means convert 3D or 2D array into a songle dimentional
//it takes take 4 argument

/*
Accumulator
current value
current index
source Array
 */

let ar = [5,6,7];
let su = ar.reduce((accumulator, currElem, index, arr) => {
   return accumulator *= currElem
})
console.log(su);

//converting 2d and array into one dimensional array
// const arry = [['z_1', 'z_2'],
// ['z_3','z_4'],
// ['z_5','z_6'],
// ['z_7','z_8'],];

// let flarArr = arr.reduce((accumulator,currElem) => {
//     return accumulator.concat(currElem);
// })
// console.log(flarArr);