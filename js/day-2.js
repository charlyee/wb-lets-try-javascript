/* day-2.js */

/**
 * CONVERTING STRINGS TO NUMBERS:
 */

var myNumber = '54.6'; // String :o

console.log( myNumber + 6 ); // Concatenation occurs!

myNumber = parseFloat( myNumber ); // Now it is a "float"!

console.log( myNumber + 6 ); // Addition occurs!

myNumber = parseInt( myNumber ); // Now it is an "int"!

console.log( myNumber + 6 ); // Addition occurs!

myNumber = Number( myNumber ); // Now it is a 64-bit floating point numeric! The only ACTUAL type of number in JavaScript...!

console.log( myNumber + 6 ); // Addition occurs!

/**
 * CONVERTING NUMBERS TO STRINGS:
 */

 myNumber = myNumber.toString(); // The toString() method will turn a number into a string!

 console.log( myNumber + 6 ); // Concatenation once more!

 /**
  * Watch out! Auto-conversion can be.. interesting! Always check your bases: 
  */

var myString = 'Hello world!';
console.log( 'Test 1:' );
console.log( 'Type is: ' + ( typeof myString ) );
console.log( myString ); // 'Hello world!'

myString = 5;
console.log( 'Test 2:' );
console.log( 'Type is: ' + ( typeof myString ) ); // We can check types using "typeof"! Very useful in "if" statements to see if you have the right data-types.
console.log( myString ); // 5

myString = myString * 3;
console.log( 'Test 3:' );
console.log( 'Type is: ' + ( typeof myString ) );
console.log( myString ); // 15

myString = 'Updated string.';
console.log( 'Test 4:' );
console.log( 'Type is: ' + ( typeof myString ) );
console.log( myString ); // 'Updated string.'

myString = { "another" : "string test!?" };
console.log( 'Test 5:' );
console.log( 'Type is: ' + ( typeof myString ) );
console.log( myString ); // { another: 'string test!?' }

/**
 * SWITCH (CASE) Statements
 */

var mathOperation = 'add';

switch ( mathOperation ) {
    case "subtract":
        console.log( 5 - 5 );
        break;
    case "add":
        console.log( 5 + 5 );
        break; // Switches execute starting at a first MATCHing value.
               // However... they only STOP executing when they hit a break.
               // No break? Everything after the first match will execute!
    case "divide":
        console.log( 5 / 5 );
        break;
    case "multiply":
        console.log( 5 * 5 );
        break;
    default:
        console.log( 'No operator provided.' );
        break;
}

/**
 * Let's manipulate things in the DOM!
 *                       (Document Object Model)
 */

var myParagraph = document.getElementById( 'my-paragraph' ); // Target and store an element!
console.log( myParagraph );

myParagraph.textContent = 'Hello, world!';
myParagraph.textContent += ' Also, hey how are ya\'?'; // \' is an escape. It says "don't close my string, just store an actual apostraphe here!"

// Create a BRAND NEW element. It won't show up yet, but we can start manipulating it before we inject it into our webpage!
var newParagraph = document.createElement( 'P' ); // Creating a paragraph.
newParagraph.textContent = 'This paragraph was created completely in JavaScript! Wowie! Zounds! Gadzooks!'; // Populate your element.
// Add your element to the document body!
document.body.appendChild( newParagraph );

var otherNewParagraph = document.createElement( 'P' );
otherNewParagraph.textContent = 'Second new paragraph.';

// Please never actually do inline styles like this... Apply a class or ID and use your CSS file to apply styles instead! :)
otherNewParagraph.style.color = 'darkgray';

var myFirstLink = document.createElement( 'A' ); // An anchor (link).
myFirstLink.textContent = 'Click Here!';
myFirstLink.href = './index.html';
myFirstLink.title = 'Return to the Homepage.';
// myFirstLink.style.color = 'red';
myFirstLink.className = 'my-link';
// We're adding the link INTO our brand new paragraph BEFORE it even goes to the browser!
otherNewParagraph.appendChild( myFirstLink );

// Now, our paragraph with TEXT and a LINK both, will be added to the body!
document.body.appendChild( otherNewParagraph );

// Let's try query selector.
var targetLink = document.querySelector( '.my-link' );
targetLink.textContent = 'Go Back Home';