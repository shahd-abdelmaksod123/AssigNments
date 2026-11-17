Q1:
forEach:
It is an Array method that executes a callback function for each element.
It cannot use break or continue to control the loop.
Use it when we want to perform an operation on every array element.
for...of:
It is a loop used to iterate over iterable objects such as Arrays and Strings.
It allows using break and continue.
Use it when we need more control over the iteration.
------------------------------------------------------------------------
Q2:
hoisting is when we declare a variable(or functions) like let x=0 the declaration part would processed before the code execution. 
var is hoisted and initialized with undefined.
let and const are hoisted but cannot be accessed before initialization.
so when we want access on the variable before the line it declared on and initialized in ,we would get undefined as output if the dec type is" var " and an error is caused if the dec type is "const" or "let" (and that is the dead time zone) and the same thing on funcs  declarations are fully hoisted and can be called before their definitions.
but arrow and expression functions  if dec type is let or const the function would cause an error if we tried to access them on the line before they are declared and initialized 

ex: console.log(x)
    let x=1        " that would cause an error"TDZ
but  console.log(y)
     var  y=1    "output is undefined"

--------------------------------------------------------------
Q3:
"==" :perform type coercion ,if we compare two variable of diff data types it converts them before comparison then return the result of the comparison
"===" :does not perform Type Coercion. It compares both the value and the data type.
---------------------------------------------------------------
Q4:
try catch is used for error handling without stopping the program unexpectedly
try: contains the code that might cause an error.
catch: executes if an error occurs inside the try block.
Using try-catch with async/await allows us to catch rejected Promises and handle errors without crashing the program unexpectedly.
-----------------------------------------------------------
Q5:
conversion : means we perform an explicit conversion on data types 
like let num= Number("20")+10.
coercion: an implicit conversion javascript performed automatically on data types
like console.log("123" == 123);

