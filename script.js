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

} else if (value === '.'){
    //Get the last number in the display
    let lastNumber = currentValue.split(/[+\-*/]/).pop();
    // only add the decimal if the fcurrent number does not already have a decimal
    if (!lastNumber.includes('.')){
        display.value = currentValue + value;
    }
} else {
    display.value = currentValue + value;
}

//reset the justCalculated flag whe user starts typing
justCalculated = false;

console.log('Display updated to:', display.value);
}
function clearDisplay() {
    console.log('clear button pressed.');
    display.value = '0';
    justCalculated = false; // Reset the calculation flag
    display.style.backgroundColor = '#f0f0f0'; // Reset background color
    setTimeout(() => {
        display.style.backgroundColor = ''; // Reset background color after 1 second
    }, 150 );

}
function deleteLast() {
    console.log('Backspace button pressed.');
    let currentValue = display.value;

    //If there's only one character or it 0, reset to 0
    if (currentValue.length <= 1 || currentValue === "0") {
        display.value = "0";
    } else {
        // Remove the last character
        display.value = currentValue.slice(0, -1);
    }
}


function  calculate(){
    console.log('equals button pressed.');

    alert('equals button was clicked');
}
document.addEventListener('keydown', function(event) {
    console.log('Key pressed:', event.key);
    if (event.key >= '0' && event.key <= '9') {
        appendToDisplay(event.key);
    }else if (event.key === '.'){
        appendToDisplay('.');
    }else if (event.key === '+'){
        appendToDisplay('+');
    }else if (event.key === '-'){
        appendToDisplay('-');
    }else if (event.key === '*'){
        appendToDisplay('*');
    }else if (event.key === '/'){
        event.preventDefault();
        appendToDisplay('/');
    }

    else if (event.key === 'Enter' || event.key === '=') {
        calculate();
    }else if (event.key === 'Escape' || event.key === 'c' || event.key === 'c'){
        clearDisplay();
    } else if (event.key === 'Backspace' ){
        deleteLast
    }
})
document.addEventListener('DOMContentLoaded', function() {
    console.log('calculator loaded successfully');
    console.log('Display element', display );

    if (display) { 
        console.log('current display value: ', display.value);
    } else {
        console.log('display element not found');
    }

}) 