"use strict";

// grab h1

const originalString = document.querySelector('.typewritten');

// get H1 length (.lengt = 44 characters)

let maxAmount = 44;

// create a new variable to store the original H1

let newString = originalString.innerHTML;

// set original h1 to emptiness

originalString.innerHTML = '';

// create an ITERATOR

let i = 0;

// create the loop

function loop(){
    
    // if the iterator is less than the h1's amount of characters

    if (i < maxAmount){

        let specificCharacter = newString[i];

        // console character at position of i
        //console.log(stringy.innerHTML[i]);
        originalString.innerHTML = originalString.innerHTML.concat(specificCharacter);
        
        // increment i by 1
        i++;

    }  
    
    
    setTimeout(loop, 1000); 
    
}

loop();

