// Description: This script handles the display of a message when a button is clicked.
const display = document.getElementById('display');

// Track if we have perfrmed a calculation
let justCalculated = false;

function appendToDisplay(value){
    console.log('Button presed:', value);


    let currentValue = display.value;
    if (justCalculated && !isNaN(value)) {
        display.value = value;
        justCalculated = false;
        return;

    alert('you pressed: ' + value);
}
// If the display is empty, set the value to the button pressed
if (currentValue === "0" && !isNaN(value)){
    display.value = value;
}
// if user enters decimal, keep the zero
else if (currentValue === "0" && value === '.') {
    display.value = currentValue + value;

}
else {
    display.value = currentValue + value;
}

//reset the justCalculated flag whe user starts typing
justCalculated = false;

console.log('Display updated to:', display.value);
}
function clearDisplay() {
    console.log('backspace button pressed.');

    alert('backspace button was clicked');
}
function deleteLast() {
    console.log('backspace button pressed.');
    let currentValue = display.value;

    //If there's only one character or it 0, reset to 0
    if (currentValue.length <= 1 || currentValue === "0") {
        display.value = "0";
    } else {
        // Remove the last character
        display.value = currentValue.slice(0, -1);
    }
    alert('backspace button was clicked');
}


function  calculate(){
    console.log('equals button pressed.');

    alert('equals button was clicked');
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('calculator loaded successfully');
    console.log('Display element', display );

    if (display) { 
        console.log('current display value: ', display.value);
    } else {
        console.log('display element not found');
    }

}) 