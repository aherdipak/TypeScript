# TypeScript
This is the code for "Learn basic's of TypeScript"


###  Overview

You will learn about

- Introduction
- Environment Setup
- Variable Declarations
- Variable Types
- Functions
- Interface
- Class
- Access Modifiers

## Introduction

1. The typescript is just extended javascript. 
2. The typescript is an open source programming language developed & maintained by Microsoft.
   It is a typed superset of javascript that compiled to pain javascript, which is understood by the browsers.
3. Javascript is dynamically typed which means javascript does not know what type of variable is, Until it is actually instantiated at runtime which is too late. Typescript on the other hand add type support to javascript as resulting errors are identified when you type your code & during the compilation steps.
4. The best part is specifying the type is completely optional.  
5. Another important reason to consider typescript is the enhanced IDE support with typescript, we get an intelligent support ability to refactor code easily.
6. Typescript is the main programming language of angular.
 
 

## Environment Setup

1) Download and install nodejs

   > https://nodejs.org/en/download/
  
   In the terminal run below commnad to check nodejs version
   > `$ node -v`
  
2) Install TypeScript 
 
   In the terminal run below commnad 
   > `$ sudo npm install -g typescript`
 
   In the terminal run below commnad to know the which version install on your machine
   > `$ tsc -v`
 
3) Install Git:
 
   > https://sourceforge.net/projects/git-osx-installer/

   In the terminal run below commnad to know the which version install on your machine
   > `$ git --version`

4) Install Visual Studio Code IDE

   > https://code.visualstudio.com/download

 
## Run Commands
   ```
   let msg = 'Hello world';
   console.log(msg);
   ```
   Now compile this code to plain javascript using typescript compiler.
   
   Open terminal and run the below command
   > `$ tsc main.ts` (extension is optional)
   
   command creates file `main.js` which contains the transpiled code to run code in the terminal run below command
   > `$ node main.js` (extension is optional)
   
   If you notice we have an error on `msg` variable says "Cannot redeclare block-scoped variable 'msg'." this happpes because the file is treated as a script rather than a module.
   
   A module has its own scrope where as scripts share the global scrope. to remove this error we need to add an export statement at the top which exports nothing. by adding import & export statement typescript treats this file is a module instead of script.( so at the top add `export{}`)

   ```
   export{}
   let msg = 'Hello world';
   console.log(msg);
   ```
   Now userfull feature is automatically recompile that typescript file whenever there is a change. We can do that using the `watch option` of the typescript compiler. 
   
   In the terminal run the command  
   > `$ tsc main --watch`
   
   ## Variable Declarations
   
   Unlike traditional javascipt typescript encarages to use `let` and `const` keywords to variable declarations. 
   
   Javascript has only `global scope` and `function scope` there is no `block lavel scope` this is something that often misleand programmers to use other languages.
   
   Both `let` and `const` supports `block level scoping` and you can't redeclared variable multiple times with `let` or `const`
   
   ```
   let x = 10;
   const y = 20;

   let x= 10; // get error
   ```
   #### What is the differance between `let` and `const`?
   
   `let` declaration can be done without initialization whereas `const` declaration always initialised with the value and `const` declaration once assigned can never be reassiged.
   
   ```
   let sum;
  
   const title; //get error
   const title = 'Welcome';
   ```

## Variable Types

   Basic types in typescript that is `boolean`, `number` and `string`.
   
   ```
   let isBeginer: boolean = true;
   let total: number = 0;
   let name: string = 'Deepak';
   ```
   
   In typescript you can also use template strings, and template strings can span multiple lines and have embedded expressions.
   
   ```
   let sentence: string = `My name is ${name}
   I am a beginner in TypeScript`;

   console.log(sentence);
   ```
   #### Imporatance of types:
   
   Unlike javascript typescript helps you with static type checking which can prevent you from making mistakes that would otherwise go unnoticed during development.
   
    ```
      name = true; // error
    ```
    
   Second imp. use of having type is intelligence eg. If I type name do you can see the intelligence providing the properties and methods applicable to string type this is possible because of type only.
   
   We have two more type `null` and `undefined`
   
   You can actually declare a variable that is of type `null` or `undefined` in typescript.
   
   ```
   let n: null = null;
   let u: undefined = undefined;
   ```
   
   But there are not much use on their own that is why in typescript `null` and `undefined` are classified as `subtype of all other types` that means to say you can assign a value of null or undefined to either boolean, number or a string typed variable.
   
   ```
   let isNew:boolean = null;
   let myName: string = undefined;
   ```
   
   By using this basic types and subtypes we can declare an array of values using the array type. there are two syntaxes for declaring an array type.
   
   ```
   let list1: number[] = [1,2,3];
   let list2: Array<number> = [1,2,3];
   ```
   
   Having an array same type values that great but sometimes you might have an array that contains values of mixed type. So that purpose typescript provides the `tuple` type.
   
   ```
   let person1: [string, number] = ['Deepak', 10];
   ```
   
   The thing with a `tuple` though is that the number of the element in the array are fixed and order of the value should be match with the order of the type. so we can not add extra value at the same time i cannot swap the values.
   
   ```
   let person1: [string, number] = ['Deepak', 10, 20];// error
   let person1: [string, number] = [10, 'Deepak']; // error
   ```
   
   We have the `enum` type which is a way of giving more friendly names to a set of numeric values. 
   
   ```
   enum Color {Red, Green, Blue};

   let c: Color = Color.Green;
   console.log(c);
   ```
   
   If you see in console the of `c` is 1 
  
  `enum` values begin with a value of 0, So Red is 0, Green ia 1 and Blue is 2
  
  If you want the number starting at the a different value specify that in the `enum` declaration
  
   ```
   enum Color1 {Red1 = 5, Green1, Blue1};

   let d: Color1 = Color1.Green1;
   console.log(d);
   ```
   
   When you run code you can see that green is at a value of 6
   
   
   

