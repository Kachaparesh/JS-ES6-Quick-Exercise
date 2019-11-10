console.log("Hello from JavaScript");

// 7 Data types
/*
- undefined
- null
- boolean
- string
- symbol
- number 
- object
*/

//decalre variable - 3 ways
var myName = "Paresh"; // functional scope sequence doesnt metters 
let surName = "Kacha"; // block scope sequence metters, doesnt allow in duplication in defining variables
const pi = 3.14; // constant: not mutable the whole value, but can manipulat it, have all the properties of let

console.log(myName + surName + pi);

//increment example
var temp = 10;
console.log(temp++); // increments after execution at this line
console.log(temp);
console.log(++temp);// increments before execution at this line

//Escaping literal quotes in string - 5 ways
// 1 - use double quotation inside double quotation and use "\ (backslash)" with inner quotation to escape
var tempStr = "Here is a \"double quoted string\"";
console.log(tempStr);

// 2 - use double quotation inside single quotation
var tempStr1 = 'single quoted string with "Double quotation"';
console.log(tempStr1);

//3 - use back-ticks "`" and use any quotation sign freely in string;
var tempStr2 = `'single quoted string with "Double quotation" with bact ticks'`;
console.log(tempStr2);

//4 - reverse of 2nd is also possible
var tempStr3 = "Double quoted string with 'single quotation'";
console.log(tempStr3);

//5 - replace single quote in 1st will also work
var tempStr4 = 'Here is a \'single quoted string\'';
console.log(tempStr4);

// Escaping Sequences
/*
CODE OUTPUT
\'   '
\"   "
\\   \
\n   new line
\r   carriage return
\t   tab
\b   backspace
\f   form feed
*/ 

// Some basic string operations
var strToOperate = "test";
// length of string
console.log(strToOperate.length);
// string behaves as an array of character, character is accessible by index
console.log(strToOperate[2]);

// string types are immutable, means string can be change completely but cant be change individual character
var immutStr = "Jello World";
//immutStr[0] = 'H'; //Error
immutStr = "Hello World"
console.log(immutStr);

// Array can allow multiple data types
var tempArray = ["str", 10];
console.log(tempArray);

// nested array - multi dimenstion array
var multArray = [["person","age"],"address"];
// to get age 
console.log(multArray[0][1]);

// Some Array functions
/*
push - insert element at the end
pop - remove last element
shift - remove first element
unshift - insert element at beginning
*/

// Var Scopes
console.log(x);
var x=5;
console.log(x);

// Let scope
//console.log(y); // Gives Error as y is not declared yet
let y=5;
console.log(y);

// local variable with same name will overlap the global variable
var testVar = "global";

function testScope(){
    var testVar = "local";
    console.log(testVar);
}
testScope();
console.log(testVar);

// queuing function example with return type
function queueFunc(arr, item){
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];
console.log("Before: " + JSON.stringify(testArr));
console.log(queueFunc(testArr,6));
console.log("After: " + JSON.stringify(testArr));

// "===" - strict equal comparision: not just compare value but data type as well, "==" just compare values only

function compareAndStrictCompare(value1, value2)
{
    var compare = value1 == value2;
    var strictCompare = value1 === value2;
    console.log("Simple compare: " + compare)
    console.log("Strict compare: " + strictCompare)
}

compareAndStrictCompare(3, "3");

// Strict inequality => !== (inverse of ===)
console.log(3 !== "3"); //=> true

// Objects/ Dictionary/ Key-Value Pair

var customer = {
  "firstName":"John",
  "last Name":"Woo",
  "address":"abc street",
  "order":1,
  "items":["a",1,"b",2,"c"]  
};

// 2 Ways of accessing object properties
console.log(customer.firstName); // dot notation doesnt work when we have a space in property name
console.log(customer["last Name"]); // when we have space in property name, we have to use braces to access that property, single quotation will also work here

// Assignment
customer.firstName = "Sam";
customer["last Name"] = "Boulton";

console.log(customer);

var collection = {
    "2548":{
        "album":"Slippery when wet",
        "artist":"Bon Jovi",
        "tracks":[
            "Let it rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468":{
        "album":"1999",
        "artist":"Price",
        "tracks":[
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245":{
        "artist":"Robert Palmer",
        "tracks":[]
    },
    "5439":{
        "album":"ABBA Gold",
    }
};

// keeps copy of the collection for test
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Have fun here to play arround
function updateRecord(id, prop, value)
{
    if(value === "" || value === [])
    {
        delete collection[id][prop]
    }
    else if (prop === "tracks")
    {
        collection[id][prop] = collection[id][prop] || []; // [] will create the array collection here if we dont have in record, otherwise it will assign it self without creating a new one so we will not loose the whole array every time.
        
        collection[id][prop].push(value);
    }
    else
    {
        collection[id][prop] = value;
    }
    return collection;
}

console.log(updateRecord(1245, "tracks", ""))

// freezing objects to unmutable state
function freezeObject(){
    "use strict"; // Used for strict following rules of JS
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    
    Object.freeze(MATH_CONSTANTS);
    
    try{
        MATH_CONSTANTS.PI = 99;
    }
    catch (ex){
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObject();
console.log(PI);


/*=============ES6==================*/

// Both the statements are same
var todaysDate = function getTodaysDate(){
    return new Date();
}

// This is arrow function example, curly braces can only be removed if function is with single statment
todaysDate = () => new Date();

// Arrow function with parameters
const concatArr = (arr1, arr2) => arr1.concat(arr2);
console.log(concatArr([1,2],[1,2,3]));

// Some complex ex of arrow function
const realNumArray = [4,5.6,-9.8,3.14,42,6,8.34,-2];
const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => num > 0 && Number.isInteger(num)).map(x => x*x);
    return squaredIntegers;
}

const squaredIntegers = squareList(realNumArray);
console.log(squaredIntegers);

// default pramater in function argument
var defaultValInMethodEx = (value, increament = 1) => {return value + increament;}
console.log(defaultValInMethodEx(5,2));
console.log(defaultValInMethodEx(5));

// Reduce function us used to access each array element
// Rest operator => "...", in above example this operator is used to convert all passed values in an array

const sum = (...args) => { return args.reduce((a,b) => a+b); } 

console.log(sum(1,2,3,4,5,6));

// Spread Operator => "..." within square braces, can spread all array elements check below example
const arr = ["Jan","Feb","Mar"];
var arrToMerge = ["Apr","May", "Jun"];
var newArr = [];
newArr.push(arr);
newArr.push(arrToMerge);
console.log(newArr);
newArr = [];
newArr.push(...arr);
newArr.push(...arrToMerge);
console.log(newArr);

// Destructuring assignemnts

// Basics
var voxel = {x:1.2 ,y:2.3 ,z:3.4};

// Older way to assign properties
var a = voxel.x; // a= 1.2
var b = voxel.y; // b= 2.3
var c = voxel.z; // c= 3.4

// Destructured assignment from Objects
const {x:d, y:e, z:f} = voxel; // d=1.2, e=2.3, f=3.4

console.log(d+e+f);

// Nested Destructuring assignment from object
"use strict";
var order = {
    orderId: "1",
    orderDate: new Date,
    orderItems: {
        category: "Electronics",
        subCategories: "Laptop",
        item: "Apple Macbook" 
    }
};

const {orderItems: {item: itemName}} = order;
console.log(itemName);
//in fucntion arguments
function test({orderDate, orderItems}){
    console.log(orderDate, orderItems);
}
test(order);

// Demo of arrow func call, and Destructuring in arrow func (FYI need default value in arguments, else gives error)
//Passing string using template litrals
var orderDetail = ( { orderDate, orderId } = order ) => {return `${orderDate}, ${orderId}`;}
console.log(orderDetail.call(order));

// Destructuring assignemnts for array
const array = [1,2,3,4,5,6,7,8,9,10];
[a,b,c] = array
console.log(a,b,c);
var [a,b,,,c] = array; // Here comma skips the index for assignment to specific variable
console.log(a,b,c);
const [ , ,...subArray] = array;// Best trick ever, Here use of Destructuring assignment is used for array for escaping first two element, then rest operator is used combine rest of the array element in array, AND DONT FORGET TO ASSIGN "array" at last to make destructuring work. 
console.log(subArray);

// Object literals declaration using simple fields

// Old fashion
function person(name, age, gender){
    return {
        name: name,
        age: age,
        gender: gender      
    };
};

console.log(person("Person","18","male"));

// New Way
const newPerson = (name, age, gender) => ({name, age, gender}); // Workes on exact same arguments name, else gives error EX: here ages will not work at one of the place
console.log(newPerson("Person1", "19", "female"));


// Class and Constructor
class sales{
    constructor(amount){
        this.amount = amount;
    }
}

var laptopSale = new sales(`$5000`);
console.log(laptopSale.amount);

// Class and Constructor
//Use getter and setter to controll access to an object

function makeClass(){
class Sales{
    constructor(amount){
        this._amount = amount * 45; // Convert in to INR
    }
    
    get saleAmount(){
        return this._amount;
    }
    
    set saleAmount(saleAmount){
        this._amount = saleAmount;
    }
    }
    return Sales;
}

const Sales = makeClass(); // To initiate class, call of enclosing method is necessary, this is not a behaviour which we see in OOP languages
const saleClass = new Sales(5000);

console.log(saleClass.saleAmount);

saleClass.saleAmount= 6000;
console.log(saleClass.saleAmount);

// Import and export staement

// Following line will import specific element which is exported from the file
//import { component(can be method or variable or class) } from "./filename";

// Following line will import all element which is exported from the file and to address them a suitablename is given
//import * as suitableName from "filename";

// Export example
//export { function };

// Export fallback with export default 
export default function add(x,y) {return x+y;}

// import default export
//import add from "filename"; // no curly braces required