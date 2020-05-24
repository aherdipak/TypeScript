"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var msg = 'Hello world';
console.log(msg);
// now compile this code to plain javascript using typescript compiler.
// open terminal and run the below command
// $ tsc main.ts (extension is optional)
// command creates file main.js which contains the transpiled code
// to run code in the terminal run below command
// $ node main.js (extension is optional)
// if you notice we have an error on `msg` variable says "Cannot redeclare block-scoped variable 'msg'." this happpes because the file is treated as a script rather than a module.
// A module has its own scrope where as scripts share the global scrope. to remove this error we need to add an export statement at the top which exports nothing. by adding import & export statement typescript treats this file is a module instead of script.( so at the top add `export{}`)
// Now userfull feature is automatically recompile that typescript file whenever there is a change. We can do that using the watch option of the typescript compiler. 
// In the terminal run the command  "$ tsc main --watch"
// ----- VARIABLE DECLARATION -----
//unlike traditional javascipt typescript encarages to use `let` and `const` keywords to variable declarations. javascript has only global scope and function scope there is no block lavel scope this is something that often misleand programmers to use other languages.
// both `let` and `const` supports block level scoping and you can't redeclared variable multiple times with `let` or `const`
var x = 10;
var y = 20;
//let x= 10; // get error
// what is the differance between `let` and `const`?
// `let` declaration can be done without initialization whereas `const` declaration always initialised with the value and `const` declaration once assigned can never be reassiged.
var sum;
//const title; //get error
var title = 'Welcome';
// ------  VARIABLE TYPES ------------
// basic types in typescript that is `boolean`, 'number' and `string`
var isBeginer = true;
var total = 0;
var name = 'Deepak';
// In typescript you can also use template strings, and templte strings can span multiple lines and have embedded expressions.
var sentence = "My name is " + name + "\nI am a beginner in TypeScript";
console.log(sentence);
// imporatance of types :
//name = true; // error
// unlike javascript typescript helps you with static type checking which can prevent you from making mistakes that would otherwise go unnoticed during development.
// second imp use of having type is intelligence eg. If i type name do you can see the intelligence proviiding the properties and methods applicable to string type. this is possible because of type only.
// we have two more type `null` and `undefined`
// you can actuallu declare a variable that is of type null or undefined in typescript.
var n = null;
var u = undefined;
// But there are not much use on their own that is why in typescript null and undefined are classified as subtype of all other types that means to say you can assign a value of null or undefined to either boolean, number or a string typed variable.
var isNew = null;
var myName = undefined;
// By using this basic types and subtypes we can declare an array of values using the array type.
// ther are two syntaxes for declaring an array type.
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
// having an array same type values that great but sometimes you might have an array that contains values of mixed type. So that purpose typescript provides the `tuple` type.
var person1 = ['Deepak', 10];
// The thing with a tuple though is that the number of the element in the array are fixed and order of the value should be match with the order if the type. so we can not add extra value at the same time i cannot swap the values.
// let person1: [string, number] = ['Deepak', 10, 20];// error
// let person1: [string, number] = [10, 'Deepak']; // error
// We have the `enum` type which is a way of giving more friendly names to a set of numeric values. 
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
// If you see in consol the of `c` is 1 
// `enum` values begin with a value of 0, So Red is 0, Green ia 1 and Blue is 2
// If you want the number starting at the a different value specify that in the `enum` declaration  
var Color1;
(function (Color1) {
    Color1[Color1["Red1"] = 5] = "Red1";
    Color1[Color1["Green1"] = 6] = "Green1";
    Color1[Color1["Blue1"] = 7] = "Blue1";
})(Color1 || (Color1 = {}));
;
var d = Color1.Green1;
console.log(d);
// When you run code you can see that green is at a value of 6
//  next type is `any` type
//If you are unsure as to what a variable type would be make use of `any` type if you are expecting a value from a third part library or the user inputs the value is dynamic make use of the `any` type and that will allow yo to reassign different types of values.
var anyValue = 10;
anyValue = true;
anyValue = 'Dipak';
// you can see that the compliler doesnt throw an error.
//`any` type is also the most capable type in typescript it encompasses values of every possible type and it doesn't force us to do any checking before we try to call construct or access properties on these values for eg. below code
var myVariable = 10;
// with 'myVariable' a number of errors can occure so here i can write below cade without getting any error while writing
//console.log(myVariable.name)
//myVariable(); // here i can even call my variable as a function
//myVariable.toUpperCase(); 
// You can see that typescript does not throw an error in any of the statements because my variable is of type any.
// to tackle this issue typescript 3.0 introduced a new type called `unknown`
// `unknown` type is very similar to the any type, So any value is assignable to type `unknown` however you can't access any properties off of a unknown type nor can you call or construct them.
// If i change my variable to type `unknown` from type `any` you can see that you get the error right away.
var myVariable1 = 10;
//console.log(myVariable1.name)
//myVariable1();
//myVariable1.toUpperCase(); 
// To be able to get read of the errors we need to use type assertion to convince the type system that we know better so we have to change
//(myVariable1 as string).toUpperCase(); 
// so now typscript assumes that we have made the necessary check.
// type assertion is similsr to typecasting in other languages.
// we are saying that my variable should be treated as a string and them toUppsercase() can be applied. and it is also posible to have user defiend type guard, I'm going to create a function that checks if an object has a name property or not.
function isFunction(obj) {
    return !!obj && typeof obj === 'object' && "name" in obj;
}
if (isFunction(myVariable1)) {
    console.log(myVariable1.name);
}
// --- type inference --
// I did mention earlier that specifying types is completely optional.
var a; // So i can declare a variable 
a = 10; // and then assign value
a = true; // and i can assign a= true
// that works perfectly fine just like clean javascript, but some scenarios typescript as always wants to help us out
// so let me declare another variable
var b = 20; // this time let me also initialise thr variable in the declaration
// now when i try to assing another value b = true we can see that we can get a type error
//b = true;// when i hover on the error it says type true is not assignable to type number
// we did not specify a type to variable b what happed here that typescript inferred thattype of v  ariable b.
// when I hover on b you can see that it says it is of type number and when i type b dot you can see that intellisense providing methods that are only application to in number type. So type inference again provide static type checking and intellisense support.
// type inference takes place when initializing variables and not all the time as we seee example right now.
//type inference does not work on variable a where is no initialization  
// next cool thing with typescript is the ability to specify `union of types` for the same variable.
// eg. i can declare a variable to be a type of number and boolean using pipe charector
var multiType;
// now i can assign a number 
multiType = 100;
// or i can assing a boolean value
multiType = true;
// both of them work without any error
// usecase for specifying multiple type would be when a value is not under your control. Which might come from library or an API
// why would you want to use `union of types`instead of just `any` type 
var anyType;
anyType = 100;
anyType = true;
// there are two reasons
// 1. union types restrict to the specified types whereas the any has no restrictions. I can assign string value to above "anyType" variable but not to "multiType" variable it will trow an error.
// 2. Intelligence support : in above "multiType" variable we can get integence support but in "anyType" varable we can't
// ---- FUNCTION ---------
function add(num1, num2) {
    return num1 + num2;
}
// function add takes two parameter num1 and num2 and returns num1 + num2 this is how you would see the function in javascript
// typescript we can specify types for fuction parameters
function add1(num1, num2) {
    return num1 + num2;
}
add1(5, 10); //that works perfectly fine
// when i try to pass non numeric parameter you can see that it throws an error
//add1(5 , '10'); // error 
//we have static type checking for parameter we also get intellegence support. when i type add and open the parentheses you can see the intellegense.
// we can also explicilty specify return type of the function in function defination
function add2(num1, num2) {
    return num1 + num2;
}
// more imporatant points
// 1. optional parameters
// 2 default parameters
// in typescript every parameter is assumed to be required by the function.
// if you call the fuction without parameter it throws an error but in paint javascript it would have been possible to call the above add fuction without any parameters.
// we can get this functionality in typescript by adding a question mark to the end of parameters we want to be optional.
// If i want num2 parameter to be optional i simply add a question mark at the end of the parameter name 
function add3(num1, num2) {
    return num1 + num2;
}
// now i can call function with one parameter and second parameter treated as undefined
//add3(5);
// we can change function defination to handle the undefined value as well
function add33(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
// also note that you can have any number os optional parameters but the condition is that optional parameteres must always be after the required parameter 
// We also have default parameters in typescript
// default parameter basically like optional parameters with a set value instead of undefined
// eg.
function add4(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add4(5, 10); // returns 15 as expected;
add4(5); // there is only one argument in that value is passed to num1 as num2 is not passed value in it takes the defaut value  and returns 5 + 10 = 15;
// so default parameters like optional parameteres with a set value instead of undefined 
// --- INTERFACE ----------
// It is possible to specify an object as a type in typescript
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Bruce',
    lastName: 'wayne'
};
fullName(p);
function fullName1(person) {
    console.log(person.firstName + " " + person.lastName);
}
// --- CLASSES ----
// in plain javascript there is no concept of classes and inheritance 
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.hello = function () {
        console.log("Good Mornning " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('Deepak');
console.log(emp1.employeeName);
emp1.hello();
// because of classes it is possible to have class based inheritance
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.task = function () {
        console.log('Manager delegating tasks');
    };
    return Manager;
}(Employee));
var m1 = new Manager('John');
m1.task();
m1.hello();
console.log(m1.employeeName);
// ----  access modifiers
// access modifers are basically keywords that set the accessibility of properties and methods in a class 
// let go over public, private and protected modifiers
// by default each class member is public so we can freely access them throughout the program
// you can also explicitly specify employee name as public using the public keyword " public employeeName: string;"
//if you declare class member as a private it can not access outside of its containing class 
//console.log(m1.employeeName); // error
// you can not access private member even in derived class 
var Manager1 = /** @class */ (function (_super) {
    __extends(Manager1, _super);
    function Manager1(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager1.prototype.task = function () {
        console.log('Manager delegating tasks');
        console.log("Manager delegating tasks " + this.employeeName); // error if private, In such senariose we use protected modifier 
    };
    return Manager1;
}(Employee));
// public for free accessibility
// private for accessibility only within the class
//protected for accessibility within a class and classes derived from it
