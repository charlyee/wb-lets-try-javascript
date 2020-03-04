/**
 * Objects again!
 */

var myObject = {
    firstName: 'Warren',
    lastName:  'Uhrich',
    sayHello:  function () {
        // Creating a new paragraph...
        var newP = document.createElement( 'P' );
        newP.textContent = 'Hey there!'; // Populate paragraph...
        document.body.appendChild( newP ); // Add paragraph to body!
        // WOAH! innerHTML allows us to use HTML directly in a string :D
        document.body.innerHTML += `
            <dl><!-- A data-list! -->
                <dt>First Name:</dt><!-- Datalist title... -->
                <dd>`+this.firstName+`</dd><!-- is always followed by Datalist data! -->
                <dt>Last Name:</dt>
                <dd>`+this.lastName+`</dd>
            </dl>
        `;
    }
}
