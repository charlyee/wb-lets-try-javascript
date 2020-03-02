/*
 * Using what you just learned about conditional statements and loops, write a program that uses console.log() to print all the numbers from 1 to 100, with two exceptions.
 * For numbers divisible by 3, print Fizz instead of the number, and for numbers divisible by 5 (and not 3), print Buzz instead.
 * When you have that working, modify your program to print FizzBuzz, for numbers that are divisible by both 3 and 5 (and still print Fizz or Buzz for numbers divisible by only one of those).
*/

var myFizzBuzz = {
    i: 1, // Iterator.
    iterations: 100, // Number of total iterations.
    outputString: '',
    fizzBuzz: function () {
        // Loop based on iterations.
        while ( this.i <= this.iterations ) {
            if ( this.shouldIFizzBuzz( this.i ) ) {
                this.outputString += this.i;
                this.outputString += ': ';
                this.outputString += 'FizzBuzz!';
            } else if ( this.shouldIBuzz( this.i ) ) {
                this.outputString += this.i;
                this.outputString += ': ';
                this.outputString += 'Buzz!';
            } else if ( this.shouldIFizz( this.i ) ) {
                this.outputString += this.i;
                this.outputString += ': ';
                this.outputString += 'Fizz!';
            } else {
                this.outputString += this.i;
                this.outputString += ': ';
                this.outputString += this.i; // Plus one, so that only values between "1 and 100" will show.
            }
            // Newline.
            this.outputString += '\r\n';
            // Iterate.
            this.i++;
        }
        // Output result when loop is complete.
        return console.log( this.outputString );
    },
    // Checks if we should fizz!
    shouldIFizz: function ( num ) {
        // If divisible by 3... (no remainders.)
        if ( ( num % 3 ) === 0 ) {
            return true; // It is fizz time!
        }
        // Else, it is not fizz time :(
        return false;
    },
    // Checks if we should buzz!
    shouldIBuzz: function ( num ) {
        // If it is NOT divisible by 3... (remainders present.)
        if ( ( num % 3 ) !== 0 ) {
            // And if it IS divisible by 5... (no remainders.)
            if ( ( num % 5 ) === 0 ) {
                return true; // It is buzz time!
            }
        }
        // Else, it is not buzz time :(
        return false;
    },
    // Checks if we should fizzbuzz!
    shouldIFizzBuzz: function ( num ) {
        // If it is divisible by 3... (remainders present.)
        if ( ( num % 3 ) === 0 ) {
            // And if it is divisible by 5... (no remainders.)
            if ( ( num % 5 ) === 0 ) {
                return true; // It is fizzbuzz time!
            }
        }
        // Else, it is not fizzbuzz time :(
        return false;
    }
}

// Let's execute our program:
// myFizzBuzz.fizzBuzz();
