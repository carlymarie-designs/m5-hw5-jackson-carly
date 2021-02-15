// --- KEY WORDS ---

// SYNTAX - the set of rules that defines the combinations of symbols 
// that are considered to be correctly structured statements or expressions in that language.

// VARIABLE - a storage location paired with a symbolic name, which contains some information.

var x = 1

// FUNCTION - a block of organized, reusable code that is used to perform a single, related action. 
// Functions provide better modularity for your application and a high degree of code reusing.

// PARAMETER - a parameter or an argument is a special kind of variable used in a function 
// to refer to one of the pieces of data provided as input to the function.

// RETURN STATEMENT - a statement that instructs a program to leave the subroutine and go back to the return address. 
// The return address is located where the subroutine was called.

// CALL SITE (INVOKE) - where zero or more arguments are passed to the function, and zero or more return values are received.

// --- FUNCTION AS A DECLERATION ---

function myFunctionDec(myParam){
    return myParam;
};

myFunctionDec('Hello world');

// --- FUNCTION AS AN EXPRESSION ---

var myFunctionExp = function (myParam){
    return myParam;
};

myFunctionExp('Hello world');

// --- DECLERATION VS EXPRESSION ---

// (DECLERATION)
// HOISTING - function code is loaded first.

// (EXPRESSION)
// CLOSURE - function var keeps record of values within.

// DATA STUCTURE - a collection of data values, the relationships among them, and the functions or operations that can be applied to the data.

// ARRAY - a data structure consisting of a collection of elements, each identified by at least one array index.

var myArray = ['a', 'b', 'c'];

// OBJECT - abstract data type created by a developer. It can include multiple properties and functions and may even contain other objects.

// PROPERTIES - special values that are included within a object.

// THIS - The JavaScript 'this' keyword refers to the object it belongs to. It has different values depending on where it is used.

var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName; // works
    //   return firstName + " " + lastName; // doesn't work
    }
  };

  console.log(person.firstName);
  console.log(person.fullName());

// FOR LOOP - a control flow statement for specifying iteration, which allows code to be executed repeatedly.

var n = 2
for(i = 0; i <= n; i++ ){
    // repeated action
}

// CONDITONAL - a statement which performs a different action depending on whether condition evaluates to true or false.

var bool = true
if (bool) {
    //action
}
