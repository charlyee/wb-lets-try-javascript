// Single line comment.

/*
 This comment can be:
 many lines!
 */

// Camel-casing is common for JavaScript!
var myInteger = 34; 

// We can output to our console via the console.log method.
console.log( myInteger * 3 ); 

// Let's practice an if-chain...
if ( ( myInteger === 7 ) || ( myInteger === 34 )  ) {
    console.log( 'Number is... 7 OR 34!?' );
} else if ( ( myInteger === 6 ) && ( myInteger > 5 ) ) {
    console.log( 'Number is 6!!!' );
} else if ( myInteger > 5 ) {
    console.log( 'Number is greater than 5.' );
} else if ( myInteger < 5 ) {
    console.log( 'Number is less than 5.' );
} else {
    console.log( 'Number is 5!?' );
}

// Datatypes:
var myString = 'Hello world!'; // "List" of characters!
myInteger = 64; // Already declared, so no var!
var myFloat = 12.768; // Decimal number.
var myBoolean = true; // True or false.
var uhOh = undefined; // No value is yet assigned.
var myNull = null; // The value/variable doesn't exist!
var myArray = [myString, myInteger, myFloat, uhOh, myNull]; // Array!

// Let's try a loop! Remember: i++ is the same as:
//                             i = i + 1;
for ( var i = 0; i < 5; i++ ) {
    console.log( 'Value of position '+i+', in myArray, is: '+myArray[i] );
}

// A basic function!
function myFunction () {
    console.log( 'My function has run.' );
}

// We have to call upon it, in order to run it, don't forget!
myFunction();

/**
 * Let's convert C# exercise 4 to a JavaScript program!
 * @link https://github.com/TECHCareers-by-Manpower/csharp-exercise-4/blob/master/Program.cs 
 */

// Main program.
function smileyFunction()
{
    var input = getInput();
    input = AddSmileyToEnd( input );
    input = AddSmileyToBeginning( input );
    console.log( input );
}

// Retrieve input.
function getInput()
{
    return prompt( 'Enter your name.' );
}

// Add a "smiley" string to the end.
function addSmileyToEnd( input )
{
    input = input+":)";
    return input;
}

// Add a (sad) "smiley" string to the beginning.
function addSmileyToBeginning( input )
{
    input = ":("+input;
    return input;
}

// Output a value.
function writeName( input ) {
    console.log( input );
}

