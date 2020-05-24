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

 
## Variable Declarations
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
