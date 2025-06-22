// Description: This script handles the display of a message when a button is clicked.
const display = document.getElementById('display');

// Track if we have perfrmed a calculation
let justCalculated = false;

function appendToDisplay(value){
    console.log('Button presed:', value);

    alert('you presed: ' + value);
}

function clearDisplay() {
    console.log('clear button pressed.');

    alert('clear button was clicked');
}

function deleteLast() {
    console.log('backspace button pressed.');

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